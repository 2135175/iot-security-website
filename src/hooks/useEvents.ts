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

export default function useEvents(count: number) {
  // TODO: Get from DB
  let events: Event[] = [
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

  return events.slice(events.length - count);
}
