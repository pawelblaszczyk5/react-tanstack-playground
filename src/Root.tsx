import { Link, Outlet } from "@tanstack/react-router";

export const Root = () => (
  <>
    <div>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
    <hr />
    <Outlet />
  </>
);
