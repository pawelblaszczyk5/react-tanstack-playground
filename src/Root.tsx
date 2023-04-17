import { Link, Outlet } from "@tanstack/react-router";

export const Root = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link to="/param/$test" params={{ test: "lorem" }}>
        Param lorem
      </Link>{" "}
      <Link to="/param/$test" params={{ test: "ipsum" }}>
        Param ipsum
      </Link>
    </div>
    <hr />
    <Outlet />
  </>
);
