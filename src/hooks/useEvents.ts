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
  date: string;
  time: string;
}

const events: Event[] = [
  {
    origin: ActionOrigin.MODULE,
    eventAction: EventActionType.ARM,
    date: "03-06-2024",
    time: "11:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
  {
    origin: ActionOrigin.DASHBOARD,
    eventAction: EventActionType.UNLOCK,
    date: "01-06-2024",
    time: "12:30:10",
  },
];

async function getEvents(count: number): Promise<Event[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events.slice(events.length - count));
    }, 2500);
  });
}

export default function useEvents(count: number) {
  //TODO: Get from DB
  return createQuery(() => ({
    queryKey: ["events", count],
    queryFn: () => getEvents(count),
    refetchInterval: 60 * 1000,
  }));
}
