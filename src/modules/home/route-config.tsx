import { Route, lazy } from "@tanstack/react-router";
import { rootRoute } from "../../router";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() =>
    import("./Home").then((mod) => ({ default: mod.Home }))
  ),
  onLoad: ({ signal, preload, context: { loaderClient } }) =>
    loaderClient.getLoader({ key: "home" }).load({ signal, preload }),
});
