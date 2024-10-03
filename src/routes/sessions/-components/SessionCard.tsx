import { SessionizeSession } from "@/api/sessionize-sessions";
import { Link } from "@tanstack/react-router";
import { Badge } from "@/components/shadcn/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/ui/avatar";

interface SessionCardProps {
  session: SessionizeSession;
}

export function SessionCard({session}:SessionCardProps){
return (
  <Link
    to={"/sessions/$session"}
    params={{session: session.id}}
    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-base-300 to-base-200 hover:scale-95 hover:via-secondary/30 hover:text-primary hover:duration-300 hover:ease-in-out"
  >
    <Card className="rounded-xl border-none bg-gradient-to-r from-base-300 to-base-200 hover:via-secondary/30">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{session.title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-2">
          {session.categories.map((category) => (
            <Badge key={category.id} variant="secondary">
              {category.name}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 line-clamp-2 text-muted-foreground">
          {session.description}
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>{format(session.startsAt, "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center">
            <ClockIcon className="mr-2 h-4 w-4" />
            <span>{`${format(session.startsAt, "h:mm a")} - ${format(session.endsAt, "h:mm a")}`}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-4 w-4" />
            <span>{session.room}</span>
          </div>
          <div className="flex items-center">
            <Badge
              variant={
                session.status === session.status ? "default" : "secondary"
              }
            >
              {session.status}
            </Badge>
          </div>
        </div>
        <hr className="my-4" />
        <ul>
        {session.speakers.map((speaker) => (
              <div key={speaker.id} className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={speaker.name}
                  />
                  <AvatarFallback>
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{speaker.name}</p>
                </div>
              </div>
            ))}

        </ul>
      </CardContent>
    </Card>
  </Link>
);
}
