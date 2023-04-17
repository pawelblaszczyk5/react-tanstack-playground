import {
  Outlet,
  RouterProvider,
  Link,
  ReactRouter,
  RootRoute,
} from "@tanstack/react-router";
import { homeRoute } from "./modules/home/route-config";
import { aboutRoute } from "./modules/about/route-config";
import { loaderClient } from "./loader-client";
import { Root } from "./Root";
import { paramRoute } from "./modules/param/route-config";

export const rootRoute = RootRoute.withRouterContext<{
  loaderClient: typeof loaderClient;
}>()({ component: Root });

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, paramRoute]);

export const router = new ReactRouter({
  routeTree,
  context: {
    loaderClient,
  },
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
