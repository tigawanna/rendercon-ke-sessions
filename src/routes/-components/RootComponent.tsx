import { MainNavbar } from "@/components/navigation/MainNavbar";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import TanstackDevTools from "./TanstackDevTools";

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
          className="drawer-overlay "
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          {/* side drawer content goes here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
