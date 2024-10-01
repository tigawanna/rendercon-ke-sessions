import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { lazy } from "react";
interface TanstackDevToolsProps {}

export default function TanstackDevTools({}: TanstackDevToolsProps) {
  return (
    <>
      <ReactQueryDevtools buttonPosition="bottom-right" />
      <TanStackRouterLazyDevtools position="bottom-left" />
    </>
  );
}


export const TanStackRouterLazyDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

