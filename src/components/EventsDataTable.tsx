import useEvents, { Event } from "@/hooks/useEvents";
import { ColumnDef } from "@tanstack/solid-table";
import { DataTable } from "./DataTable";
import { Button } from "./ui/button";
import {
  FiChevronDown,
  FiChevronUp,
  FiMoreHorizontal,
  FiTrash,
} from "solid-icons/fi";
import { Match, Switch } from "solid-js";

export const columns: ColumnDef<Event>[] = [
  { accessorKey: "origin", header: "Origin" },
  { accessorKey: "eventAction", header: "Action" },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc", true)
          }
        >
          Date{" "}
          {column.getIsSorted() ? (
            column.getIsSorted() === "asc" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )
          ) : (
            ""
          )}
        </Button>
      );
    },
  },
  {
    accessorKey: "time",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc", true)
          }
        >
          Time{" "}
          {column.getIsSorted() ? (
            column.getIsSorted() === "asc" ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )
          ) : (
            ""
          )}
        </Button>
      );
    },
  },
  {
    id: "action",
    cell: () => (
      <Button variant={"ghost"}>
        <FiTrash />
      </Button>
    ),
  },
];

export const EventsDataTable = () => {
  const eventsQuery = useEvents(1000);

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>Loading ...</Match>
      <Match when={eventsQuery.isError}>Something went wrong</Match>
      <Match when={eventsQuery.isSuccess}><DataTable data={eventsQuery.data} columns={columns} /></Match>
    </Switch>
  );
};
