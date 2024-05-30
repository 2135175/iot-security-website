import { JSX } from "solid-js/h/jsx-runtime";

export default function useRecentEvents(count: number) {
  // TODO: Get from DB
  let events = [
    {
      origin: "Module",
      action: "Unlock",
      date: "2024-05-30",
      time: "11:04:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
    {
      origin: "Dashboard",
      action: "Lock",
      date: "2024-05-30",
      time: "11:05:30",
    },
  ];

  return events;
}
