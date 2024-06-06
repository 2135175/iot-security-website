import ModuleActionBtn from "@/components/ModuleActionBtn";
import RecentEventsTable from "@/components/RecentEventsTable";
import { useNavigate } from "@solidjs/router";
import {
  FiBell,
  FiBellOff,
  FiLock,
  FiTerminal,
  FiUnlock,
} from "solid-icons/fi";

export default function Home() {
  const navigate = useNavigate();
  const recentEventCount = 10;

  return (

    <main class="container py-12">
      <div class="p-3 bg-neutral-800 grow bg-opacity-70 backdrop-blur-sm text-neutral-200 rounded-md flex-col flex gap-5">
        <h1 class="text-2xl font-bold">Module Actions</h1>
        <ul class="grow flex flex-wrap gap-10 justify-around">
          <li>
            <ModuleActionBtn
              name="Lock"
              icon={<FiLock size={96} stroke-width={0.5} />}
              action={async () => {}}
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Unlock"
              icon={<FiUnlock size={96} stroke-width={0.5} />}
              action={async () => {}}
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Arm"
              icon={<FiBell size={96} stroke-width={0.5} />}
              action={async () => {}}
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Disarm"
              icon={<FiBellOff size={96} stroke-width={0.5} />}
              action={async () => {}}
            />
          </li>
          <li>
            <ModuleActionBtn
              name="Logs"
              icon={<FiTerminal size={96} stroke-width={0.5} />}
              action={async () => {
                navigate("/logs");
              }}
            />
          </li>
        </ul>
        <h1 class="text-2xl font-bold">Recent Events</h1>
        <RecentEventsTable count={recentEventCount} />
      </div>
    </main>
  );
}
