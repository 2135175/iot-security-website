import useEvents from "@/hooks/useEvents";
import { Match, Switch } from "solid-js";

export const EventsDataTable = () => {
  const eventsQuery = useEvents("des", 1);

  return (
    <Switch>
      <Match when={eventsQuery.isLoading}>Loading ...</Match>
      <Match when={eventsQuery.isError}>Something went wrong</Match>
      <Match when={eventsQuery.isSuccess}>E</Match>
    </Switch>
  );
};
