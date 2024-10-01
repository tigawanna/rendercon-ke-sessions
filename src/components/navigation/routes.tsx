import { Home, Projector, Speech } from "lucide-react";

export const routes = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "sessions",
    href: "/sessions",
    icon:Projector
  },
  {
    name: "speakers",
    href: "/speakers",
    icon:Speech
  },
] as const;
