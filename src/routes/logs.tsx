import { EventsDataTable } from "@/components/EventsDataTable";

export default function About() {
  return (
    <main class="container py-12">
      <div class="p-5 bg-neutral-800 bg-opacity-70 backdrop-blur-sm text-neutral-200 rounded-md">
        <EventsDataTable />
      </div>
    </main>
  );
}
