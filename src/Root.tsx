import { Link, Outlet } from "@tanstack/router";

export const Root = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);
