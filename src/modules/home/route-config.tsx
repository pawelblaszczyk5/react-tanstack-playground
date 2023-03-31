import { Route, lazy } from "@tanstack/react-router";
import { rootRoute } from "../../router";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() =>
    import("./Home").then((mod) => ({ default: mod.Home }))
  ),
});
