import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { For, Match, Show, Switch } from "solid-js";
import { formatDate } from "@/libs/dateUtils";
import { createQuery } from "@tanstack/solid-query";
import { getEvents } from "@/hooks/useEvents";
import { FiLoader } from "solid-icons/fi";

export default function RecentEventsTable() {
  const eventsQuery = createQuery(() => ({
    queryKey: ["events", "desc", 1],
    queryFn: () => getEvents("DESC", 1),
    refetchInterval: 2 * 60 * 1000,
    deferStream: true,
    gcTime: 60 * 1000,
    placeholderData: (previous) => previous,
  }));

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>
        <span class="flex gap-1">
          Loading
          <FiLoader class="animate-spin my-auto" />
        </span>
      </Match>
      <Match when={eventsQuery.isError}>
        <h1 class="text-xl font-bold">An error occured while fetching data.</h1>
        <p>Last attempt: {formatDate(eventsQuery.errorUpdatedAt)}</p>
      </Match>
      <Match when={eventsQuery.isSuccess}>
        <div class="flex justify-end gap-3">
          <p>Last data update: </p>
          {formatDate(eventsQuery.dataUpdatedAt)}
        </div>
        <Table>
          <Show when={eventsQuery.data?.events.length}>
            <TableCaption class="text-neutral-200">
              <Show
                when={eventsQuery.data?.events.length == 1}
                fallback={`The last ${eventsQuery.data?.events.length} events`}
              >
                The last event
              </Show>
            </TableCaption>
          </Show>
          <TableHeader>
            <TableRow>
              <TableHead class="text-neutral-200 font-bold">Origin</TableHead>
              <TableHead class="text-neutral-200 font-bold">Action</TableHead>
              <TableHead class="text-neutral-200 font-bold text-right">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Show
              when={eventsQuery.data?.events?.length}
              fallback={
                <TableRow>
                  <TableCell colSpan={3} class="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              }
            >
              <For each={eventsQuery.data?.events}>
                {(event) => (
                  <TableRow>
                    <TableCell>{event.origin}</TableCell>
                    <TableCell>{event.eventAction}</TableCell>
                    <TableCell class="text-right">
                      {formatDate(event.timestamp)}
                    </TableCell>
                  </TableRow>
                )}
              </For>
            </Show>
          </TableBody>
        </Table>
      </Match>
    </Switch>
  );
}
