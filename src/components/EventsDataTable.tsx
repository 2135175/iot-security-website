import useEvents, { Event } from "@/hooks/useEvents";
import { ColumnDef } from "@tanstack/solid-table";
import { DataTable } from "./DataTable";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

export const columns: ColumnDef<Event>[] = [
  { accessorKey: "origin", header: "Origin" },
  { accessorKey: "eventAction", header: "Action" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "time", header: "Time" },
  {
    id: "action",
    cell: () => (
      <DropdownMenu placement="bottom-end">
        <DropdownMenuTrigger class="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
            />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];

export const EventsDataTable = () => {
  const data = () => useEvents(1000);

  return <DataTable data={data} columns={columns} />;
};
