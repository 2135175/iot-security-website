import { A, useLocation } from "@solidjs/router";
import { Separator } from "./ui/separator";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) => {
    return path === location.pathname ? "font-semibold" : ""
  }

  return (
    <nav class="bg-neutral-800 bg-opacity-70 backdrop-blur-sm sticky top-0">
      <div class="container flex justify-between p-3 text-gray-200">
        <h1 class="text-3xl font-bold"><A href="/">SecuModule</A></h1>
        <ul class="items-center flex gap-3">
          <li class={`my-auto ${active("/")}`}><A href="/">Modules</A></li>
          <li><Separator class="min-h-4" orientation="vertical" /></li>
          <li class={`my-auto ${active("/logs")}`}><A href="/logs">Logs</A></li>
        </ul>
      </div>
    </nav>
  );
}
