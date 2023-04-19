import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";

import "./index.css";
import { RouterProvider } from "@tanstack/router";
import { LoaderClientProvider } from "@tanstack/react-loaders";
import { loaderClient } from "./loader-client";
import { ActionClientProvider } from "@tanstack/react-actions";
import { actionClient } from "./action-client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoaderClientProvider loaderClient={loaderClient}>
      <ActionClientProvider actionClient={actionClient}>
        <RouterProvider router={router} />
      </ActionClientProvider>
    </LoaderClientProvider>
  </React.StrictMode>
);
