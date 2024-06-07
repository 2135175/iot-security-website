import { Event, getEvents } from "@/hooks/useEvents";
import {
  ColumnDef,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";
import { For, Match, Show, Switch, createSignal, splitProps } from "solid-js";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { formatDate } from "@/libs/dateUtils";
import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { createQuery } from "@tanstack/solid-query";

export const columns: ColumnDef<Event>[] = [
  { accessorKey: "origin", header: "Origin" },
  { accessorKey: "eventAction", header: "Action" },
  {
    accessorKey: "timestamp",
    header: ({ header: _ }) => {
      return <p class="text-right">Date</p>;
    },
    cell: ({ cell }) => {
      return <p class="text-right">{formatDate(cell.getValue() as number)}</p>;
    },
  },
];

export const EventsDataTable = () => {
  const [page, setPage] = createSignal(1);
  const [sort, setSort] = createSignal<"des" | "asc">("des");
  const eventsQuery = createQuery(() => ({
    queryKey: ["events", sort(), page()],
    queryFn: () => getEvents(sort(), page()),
    refetchInterval: 2 * 60 * 1000,
    deferStream: true,
    gcTime: 60 * 1000,
    placeholderData: (previous) => previous,
  }));

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>Loading ...</Match>
      <Match when={eventsQuery.isError}>Something went wrong</Match>
      <Match when={eventsQuery.isSuccess}>
        <DataTable
          isPlaceholder={eventsQuery.isPlaceholderData}
          data={eventsQuery.data?.events}
          columns={columns}
        />
        <Pagination
          fixedItems={(eventsQuery.data?.pages ?? 0) > 6}
          count={eventsQuery.data?.pages ?? 0}
          page={page()}
          itemComponent={(props) => (
            <PaginationItem
              page={props.page}
              onClick={() => setPage(props.page)}
            >
              {props.page}
            </PaginationItem>
          )}
          ellipsisComponent={() => <PaginationEllipsis />}
        >
          <PaginationPrevious onClick={() => setPage(page() - 1)} />
          <PaginationItems />
          <PaginationNext onClick={() => setPage(page() + 1)} />
        </Pagination>
      </Match>
    </Switch>
  );
};

type TableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  data: TData[] | undefined;
  isPlaceholder: boolean;
};

const DataTable = <TData, TValue>(props: TableProps<TData, TValue>) => {
  const [local] = splitProps(props, ["columns", "data"]);

  const table = createSolidTable({
    get data() {
      return local.data || [];
    },
    columns: local.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div class={`${props.isPlaceholder && "opacity-50"}`}>
      <Table>
        <TableHeader>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <TableRow>
                <For each={headerGroup.headers}>
                  {(header) => {
                    return (
                      <TableHead class="text-neutral-200 font-bold">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  }}
                </For>
              </TableRow>
            )}
          </For>
        </TableHeader>
        <TableBody>
          <Show
            when={table.getRowModel().rows?.length}
            fallback={
              <TableRow>
                <TableCell
                  colSpan={local.columns.length}
                  class="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            }
          >
            <For each={table.getRowModel().rows}>
              {(row) => (
                <TableRow data-state={row.getIsSelected() && "selected"}>
                  <For each={row.getVisibleCells()}>
                    {(cell) => (
                      <TableCell>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    )}
                  </For>
                </TableRow>
              )}
            </For>
          </Show>
        </TableBody>
      </Table>
    </div>
  );
};
