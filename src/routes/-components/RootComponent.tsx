import { MainNavbar } from "@/components/navigation/MainNavbar";
import { Link, Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import TanstackDevTools from "./TanstackDevTools";
import { routes } from "@/components/navigation/routes";
import { closeDaiyUIDrawer } from "@/lib/daisyui";

export function RootComponent() {

  return (
    <div className="drawer h-screen w-full">
      <input id="main-side-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <MainNavbar />
        <Outlet />
        <TanstackDevTools />
        <Toaster reverseOrder />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="main-side-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="h-full w-80 bg-base-200 p-4 text-base-content">
          {/* side drawer content goes here */}
          <div className="flex h-full w-full flex-col gap-2 pt-16">
            {routes.map((route) => {
              return (
                <Link
                  to={route.href}
                  onClick={() => closeDaiyUIDrawer("main-side-drawer")}
                  key={route.name}
                  className="flex w-full items-center justify-between rounded-md bg-base-100 p-2 text-xl  text-base-content hover:text-primary"
                >
                  <span className="flex items-center gap-2 brightness-110 z-20">{route.name}</span>

                  <route.icon />
                </Link>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
