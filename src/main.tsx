import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { routeTree } from "./routeTree.gen";
import { pb } from "./lib/pb/client";
import React, { useEffect } from "react";
import { RouterPendingComponent } from "./lib/tanstack/router/RouterPendingComponent";
import { RouterErrorComponent } from "./lib/tanstack/router/routerErrorComponent";
import { RouterNotFoundComponent } from "./lib/tanstack/router/RouterNotFoundComponent";
import { themeChange } from "theme-change";

export const queryClient = new QueryClient({
  mutationCache: new MutationCache({
    onSuccess: async (_, __, ___, mutation) => {
      if (Array.isArray(mutation.meta?.invalidates)) {
        // biome-ignore lint/complexity/noForEach: <explanation>
        mutation.meta?.invalidates.forEach((key) => {
          return queryClient.invalidateQueries({
            queryKey: [key.trim()],
          });
        });
      }
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingComponent: () => <RouterPendingComponent />,
  defaultNotFoundComponent: () => <RouterNotFoundComponent />,
  defaultErrorComponent: ({ error }) => <RouterErrorComponent error={error} />,
  context: {
    pb: undefined!, // We'll inject this when we render
    queryClient
  },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  useEffect(() => {
    document.documentElement.dataset.style = "vertical";
    themeChange(false);
  }, []);

  return (
    <>
      <RouterProvider
        router={router}
        defaultPreload="intent"
        context={{
          pb,
          queryClient
        }}
      />
    </>
  );
}

const rootElement = document.getElementById("app")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}
