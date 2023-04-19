import { Loader, LoaderClient } from "@tanstack/react-loaders";

const aboutLoader = new Loader({
  fn: () => {
    console.log("about loader");

    return Math.random();
  },
});

const homeLoader = new Loader({
  fn: () => {
    console.log("home loader");

    return "Foo bar";
  },
});

export const loaderClient = new LoaderClient({
  getLoaders: () => ({
    about: aboutLoader,
    home: homeLoader,
  }),
  defaultRefetchOnWindowFocus: true,
  defaultPreloadMaxAge: 100 * 1_000,
  defaultMaxAge: 100 * 1_000,
  defaultGcMaxAge: 5 * 60 * 1_000,
});

declare module "@tanstack/react-loaders" {
  interface Register {
    loaderClient: typeof loaderClient;
  }
}
