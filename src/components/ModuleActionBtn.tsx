import { JSX } from "solid-js";
import { Button } from "./ui/button";

interface ActionCardProps {
  icon: JSX.Element;
  name: string;
  action: () => void;
}

export default function ModuleActionBtn(props: ActionCardProps) {
  return (
    <Button
      class="border border-neutral-200 flex flex-col p-4 gap-3 h-fit"
      onClick={props.action}
    >
      {props.icon}
      <p>{props.name}</p>
    </Button>
  );
}
