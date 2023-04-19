import { Router, RootRoute } from "@tanstack/router";
import { homeRoute } from "./modules/home/route-config";
import { aboutRoute } from "./modules/about/route-config";
import { loaderClient } from "./loader-client";
import { Root } from "./Root";

export const rootRoute = RootRoute.withRouterContext<{
  loaderClient: typeof loaderClient;
}>()({ component: Root });

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new Router({
  routeTree,
  context: {
    loaderClient,
  },
  defaultPreload: "intent",
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
