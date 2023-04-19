import { Action, ActionClient } from "@tanstack/react-actions";
import { loaderClient } from "./loader-client";

export const mutateRandomNumber = new Action({
  key: "mutateRandomNumber",
  action: () => {
    console.log("mutateRandomNumber action");
  },
  onEachSuccess: () => {
    loaderClient.loaders.about.invalidate();
  },
});

export const actionClient = new ActionClient({
  getActions: () => [mutateRandomNumber],
});

declare module "@tanstack/react-actions" {
  interface Register {
    actionClient: typeof actionClient;
  }
}
