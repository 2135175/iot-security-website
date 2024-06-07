import { createQuery } from "@tanstack/solid-query";

export enum ActionOrigin {
  MODULE = "Module",
  DASHBOARD = "Dashboard",
}

export enum EventActionType {
  LOCK = "Lock",
  UNLOCK = "Unlock",
  ARM = "Arm",
  DISARM = "Disarm",
}

export interface Event {
  origin: ActionOrigin;
  eventAction: EventActionType;
  timestamp: number;
}

async function getEvents(
  sort: "asc" | "des",
  page: number
): Promise<{ page: number; pages: number; rows: number; events: Event[] }> {
  const res = await fetch(`/api/event-logs/${sort}/${page}`);

  if (!res.ok) throw new Error("Could not fetch data");

  return await res.json();
}

export default function useEvents(sort: "asc" | "des" = "des", page: number) {
  return createQuery(() => ({
    queryKey: ["events", sort, page],
    queryFn: () => getEvents(sort, page),
    refetchInterval: 2 * 60 * 1000,
    deferStream: true,
    gcTime: 60 * 1000,
  }));
}
