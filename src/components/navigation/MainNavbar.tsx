import { useRouterState } from "@tanstack/react-router";
import Nprogress from "./nprogress/Nprogress";
import { NavbarRoutes } from "./NavbarRoutes";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";

interface MainNavbarProps {}

export function MainNavbar({}: MainNavbarProps) {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });

  return (
    <nav className="sticky top-0 z-30 flex h-14 w-full flex-col items-center justify-between bg-base-200">
      <div className="flex h-full w-full items-center justify-between gap-2 px-4 pr-3">
        <label
          htmlFor="main-side-drawer"
          className="btn btn-ghost drawer-button btn-sm lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </label>
        <NavbarRoutes />
        <ThemeToggle />
      </div>

      <Nprogress isAnimating={isLoading} />
    </nav>
  );
}
