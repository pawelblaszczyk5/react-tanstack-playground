import { Route, lazy } from "@tanstack/router";
import { rootRoute } from "../../router";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() =>
    import("./Home").then((mod) => ({ default: mod.Home }))
  ),
  loader: ({ signal, preload, context: { loaderClient } }) =>
    loaderClient.loaders.home.load({ signal, preload }),
});
