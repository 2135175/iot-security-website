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

export async function getEvents(
  sort: "asc" | "des",
  page: number
): Promise<{ page: number; pages: number; rows: number; events: Event[] }> {
  const res = await fetch(`/api/event-logs/${sort}/${page}`);

  if (!res.ok) throw new Error("Could not fetch data");

  return await res.json();
}
