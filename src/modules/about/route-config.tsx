import { Route, lazy } from "@tanstack/router";
import { rootRoute } from "../../router";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazy(() =>
    import("./About").then((mod) => ({ default: mod.About }))
  ),
  loader: async ({ signal, preload, context: { loaderClient } }) => {
    await loaderClient.loaders.about.load({ signal, preload });

    return () => loaderClient.loaders.about.useLoader();
  },
});
