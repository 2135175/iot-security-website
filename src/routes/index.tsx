import ModuleActionBtn from "@/components/ModuleActionBtn";
import RecentEventsTable from "@/components/RecentEventsTable";
import { Event, ActionOrigin, EventActionType } from "@/hooks/useEvents";
import { createMutation, useQueryClient } from "@tanstack/solid-query";
import { FiBell, FiBellOff, FiLock, FiUnlock } from "solid-icons/fi";

export default function Home() {
  const queryClient = useQueryClient();
  const eventMutation = createMutation(() => ({
    mutationFn: (newEvent: Event) => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(newEvent), 0);
      });
    },
    onMutate: async (newEvent: Event) => {
      await queryClient.cancelQueries({ queryKey: ["events", "desc", 1] });

      const prevEvents = queryClient.getQueryData(["events", "desc", 1]);

      queryClient.setQueryData(["events", "desc", 1], (oldData: any) => {
        return { ...oldData, events: [newEvent, ...oldData.events] };
      });

      return { prevEvents: prevEvents };
    },
    onError: (err, _b, context) => {
      console.log(err);
      queryClient.setQueryData(["events", "desc", 1], context?.prevEvents);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
    },
  }));

  return (
    <main class="container py-12">
      <div class="p-3 bg-neutral-800 grow bg-opacity-70 backdrop-blur-sm text-neutral-200 rounded-md flex-col flex gap-5">
        <h1 class="text-2xl font-bold">Module Actions</h1>
        <ul class="grow flex flex-wrap gap-10 justify-around">
          <li>
            <ModuleActionBtn
              name="Lock"
              icon={<FiLock size={96} stroke-width={0.5} />}
              action={() =>
                eventMutation.mutate({
                  origin: ActionOrigin.DASHBOARD,
                  eventAction: EventActionType.LOCK,
                  timestamp: Date.now(),
                })
              }
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Unlock"
              icon={<FiUnlock size={96} stroke-width={0.5} />}
              action={() =>
                eventMutation.mutate({
                  origin: ActionOrigin.DASHBOARD,
                  eventAction: EventActionType.UNLOCK,
                  timestamp: Date.now(),
                })
              }
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Arm"
              icon={<FiBell size={96} stroke-width={0.5} />}
              action={() =>
                eventMutation.mutate({
                  origin: ActionOrigin.DASHBOARD,
                  eventAction: EventActionType.ARM,
                  timestamp: Date.now(),
                })
              }
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Disarm"
              icon={<FiBellOff size={96} stroke-width={0.5} />}
              action={() =>
                eventMutation.mutate({
                  origin: ActionOrigin.DASHBOARD,
                  eventAction: EventActionType.DISARM,
                  timestamp: Date.now(),
                })
              }
            />
          </li>
        </ul>
        <h1 class="text-2xl font-bold">Recent Events</h1>
        <RecentEventsTable />
      </div>
    </main>
  );
}
