import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";

import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { LoaderClientProvider } from "@tanstack/react-loaders";
import { loaderClient } from "./loader-client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoaderClientProvider loaderClient={loaderClient}>
      <RouterProvider router={router} />
    </LoaderClientProvider>
  </React.StrictMode>
);
