import { Loader, LoaderClient } from "@tanstack/react-loaders";

const aboutLoader = new Loader({
  loader: () => {
    console.log("about loader");

    return Math.random();
  },
  key: "about",
});

const homeLoader = new Loader({
  loader: () => {
    console.log("home loader");

    return "Foo bar";
  },
  key: "home",
});

export const loaderClient = new LoaderClient({
  getLoaders: () => [aboutLoader, homeLoader],
  defaultRefetchOnWindowFocus: true,
  defaultPreloadMaxAge: 15_000,
  defaultMaxAge: 10_000,
});

declare module "@tanstack/react-loaders" {
  interface Register {
    loaderClient: typeof loaderClient;
  }
}
