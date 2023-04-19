import { Loader, LoaderClient } from "@tanstack/react-loaders";

const aboutLoader = new Loader({
  fn: () => {
    console.log("about loader");

    return Math.random();
  },
  // Uncomment these and it'll be cached more aggressively, despite being the same setting as defaults below
  // preloadMaxAge: 15_000,
  // maxAge: 15_000,
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
  defaultPreloadMaxAge: 15_000,
  defaultMaxAge: 15_000,
  defaultGcMaxAge: 5 * 60 * 1_000,
});

declare module "@tanstack/react-loaders" {
  interface Register {
    loaderClient: typeof loaderClient;
  }
}
