import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "@/components/Nav";
import "./app.css";
import { QueryClientProvider } from "@tanstack/solid-query";
import { QueryClient } from "@tanstack/query-core";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router
      root={(props) => (
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Suspense>{props.children}</Suspense>
        </QueryClientProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
