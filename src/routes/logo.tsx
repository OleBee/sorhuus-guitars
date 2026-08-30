import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/logo")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
