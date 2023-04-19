import { Route, lazy } from "@tanstack/router";
import { rootRoute } from "../../router";

export const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazy(() =>
    import("./Home").then((mod) => ({ default: mod.Home }))
  ),
  loader: async ({ signal, preload, context: { loaderClient } }) => {
    await loaderClient.loaders.home.load({ signal, preload });

    return () => loaderClient.loaders.home.useLoader();
  },
});
