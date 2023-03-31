import { Route, lazy } from "@tanstack/react-router";
import { rootRoute } from "../../router";

export const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: lazy(() =>
    import("./About").then((mod) => ({ default: mod.About }))
  ),
  onLoad: ({ signal, preload, context: { loaderClient } }) =>
    loaderClient.getLoader({ key: "about" }).load({ signal, preload }),
});
