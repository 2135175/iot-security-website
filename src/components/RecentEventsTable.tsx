import useEvents from "@/hooks/useEvents";
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

interface RecentEventsTableProps {
  count: number;
}

export default function RecentEventsTable(props: RecentEventsTableProps) {
  const eventsQuery = useEvents(props.count);

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>Loading...</Match>
      <Match when={eventsQuery.isError}>Whoops!</Match>
      <Match when={eventsQuery.isSuccess}>
        <Table>
          <TableCaption class="text-neutral-200">
            The last {eventsQuery.data?.length} events
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead class="text-neutral-200 font-bold">Origin</TableHead>
              <TableHead class="text-neutral-200 font-bold">Action</TableHead>
              <TableHead class="text-neutral-200 font-bold text-right">
                Date
              </TableHead>
              <TableHead class="text-neutral-200 font-bold">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <For each={eventsQuery.data}>
              {(event) => (
                <TableRow>
                  <TableCell>{event.origin}</TableCell>
                  <TableCell>{event.eventAction}</TableCell>
                  <TableCell class="text-right">{event.date}</TableCell>
                  <TableCell>{event.time}</TableCell>
                </TableRow>
              )}
            </For>
          </TableBody>
        </Table>
      </Match>
    </Switch>
  );
}
