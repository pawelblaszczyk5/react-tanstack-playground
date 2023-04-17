import { Route, lazy } from "@tanstack/react-router";
import { rootRoute } from "../../router";

export const paramRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/param/$test",
  component: lazy(() =>
    import("./Param").then((mod) => ({ default: mod.Param }))
  ),
  onLoad: ({ params }) => console.log(params),
});
