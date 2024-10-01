import { MainNavbar } from "@/components/navigation/MainNavbar";
import { Outlet } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import TanstackDevTools from "./TanstackDevTools";

export function RootComponent() {
  return (
    <div className="content min-h-screen w-full">
      <MainNavbar />
      <Outlet />
      <TanstackDevTools />
      <Toaster reverseOrder />
    </div>
  );
}
