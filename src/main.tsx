import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";

import "./index.css";
import { RouterProvider } from "@tanstack/react-router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
