import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { For, Match, Switch } from "solid-js";
import { formatDate } from "@/libs/dateUtils";
import { createQuery } from "@tanstack/solid-query";
import { getEvents } from "@/hooks/useEvents";

interface RecentEventsTableProps {
  count: number;
}

export default function RecentEventsTable(props: RecentEventsTableProps) {
  const eventsQuery = createQuery(() => ({
    queryKey: ["events", "des", 1],
    queryFn: () => getEvents("des", 1),
    refetchInterval: 2 * 60 * 1000,
    deferStream: true,
    gcTime: 60 * 1000,
    placeholderData: (previous) => previous,
  }));

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>Loading...</Match>
      <Match when={eventsQuery.isError}>Whoops!</Match>
      <Match when={eventsQuery.isSuccess}>
        <Table>
          <TableCaption class="text-neutral-200">
            The last {eventsQuery.data?.events.length} events
          </TableCaption>
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
          </TableBody>
        </Table>
      </Match>
    </Switch>
  );
}
