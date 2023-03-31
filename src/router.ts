import {
  Outlet,
  RouterProvider,
  Link,
  ReactRouter,
  RootRoute,
} from "@tanstack/react-router";
import { homeRoute } from "./modules/home/route-config";
import { aboutRoute } from "./modules/about/route-config";
import { Root } from "./Root";

export const rootRoute = new RootRoute({
  component: Root,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute]);

export const router = new ReactRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
