export enum ActionOrigin {
  MODULE = "Module",
  DASHBOARD = "Dashboard",
}

export function fromActionOriginString(originString: string) {
  switch (originString) {
    default:
    case "Module":
      return ActionOrigin.MODULE;
    case "Dashboard":
      return ActionOrigin.DASHBOARD;
  }
}

export enum EventActionType {
  TRIGGER = "Alarm Triggered",
  LOCK = "Lock",
  UNLOCK = "Unlock",
  ARM = "Arm",
  DISARM = "Disarm",
}

export function fromEventActionString(actionString: string): EventActionType {
  switch (actionString) {
    default:
    case "Alarm Triggered":
      return EventActionType.TRIGGER;
    case "Lock":
      return EventActionType.LOCK;
    case "Unlock":
      return EventActionType.UNLOCK;
    case "Arm":
      return EventActionType.ARM;
    case "Disarm":
      return EventActionType.DISARM;
  }
}

export type Event = {
  origin: ActionOrigin;
  eventAction: EventActionType;
  timestamp: number;
};

export function eventFromRow(
  origin: string,
  action: string,
  timestamp: number
): Event {
  return {
    origin: fromActionOriginString(origin),
    eventAction: fromEventActionString(action),
    timestamp: timestamp,
  };
}

export async function getEvents(
  sort: "ASC" | "DESC",
  page: number
): Promise<{ page: number; pages: number; rows: number; events: Event[] }> {
  const res = await fetch(`/api/event-logs/${sort}/${page}`);

  if (!res.ok) throw new Error("Could not fetch data");

  return await res.json();
}
