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

interface RecentEventsTableProps {
  count: number;
}

export default function RecentEventsTable(props: RecentEventsTableProps) {
  const events = useEvents(props.count);

  return (
    <Table>
      <TableCaption class="text-neutral-200">
        The last {events.length} events
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
        {events.map((val) => {
          return (
            <TableRow>
              <TableCell>{val.origin}</TableCell>
              <TableCell>{val.eventAction}</TableCell>
              <TableCell class="text-right">{val.date}</TableCell>
              <TableCell>{val.time}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
