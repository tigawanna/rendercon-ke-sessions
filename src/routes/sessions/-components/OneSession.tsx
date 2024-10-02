import { sessionizeOneSessionsQueryOptions } from "@/api/query-options";
import { Badge } from "@/components/shadcn/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams,Navigate } from "@tanstack/react-router";
import { CalendarIcon, ClockIcon, LinkIcon, MapPinIcon } from "lucide-react";
import { format } from "date-fns";
import { SpeakersFromIdArray } from "@/routes/speakers/-components/SpeakersFromIdArray";


interface OneSpeakerProps {

}

export function OneSession({}:OneSpeakerProps){
    const {session} = useParams({
        from:"/sessions/$session"
    })
    const query = useSuspenseQuery(sessionizeOneSessionsQueryOptions({session_id:session}));
const oneSession = query.data;
if(!oneSession){
    return <Navigate to="/speakers" />
}

return (
  <div className="flex h-full w-full flex-col items-center justify-center">
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">
            {oneSession.title}
          </CardTitle>
          <div className="mt-2 flex flex-wrap gap-2">
            {oneSession.categories.map((category) => (
              <Badge key={category.id} variant="secondary">
                {category.name}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{oneSession.description}</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{format(oneSession.startsAt, "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="mr-2 h-4 w-4" />
              <span>{`${format(oneSession.startsAt, "h:mm a")} - ${format(oneSession.endsAt, "h:mm a")}`}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="mr-2 h-4 w-4" />
              <span>{oneSession.room}</span>
            </div>
            <div className="flex items-center">
              <Badge
                variant={
                  oneSession.status === oneSession.status
                    ? "default"
                    : "secondary"
                }
              >
                {oneSession.status}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 bg-base-300">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Speakers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <SpeakersFromIdArray
              speakers={oneSession.speakers.flatMap((s) => s.id)}
            />

          </div>
        </CardContent>
      </Card>

      {(oneSession.liveUrl || oneSession.recordingUrl) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">
              Session Links
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col">
            {oneSession.liveUrl && (
              <a
                href={oneSession.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 flex items-center text-primary hover:underline"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Live Stream
              </a>
            )}
            {oneSession.recordingUrl && (
              <a
                href={oneSession.recordingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
                Recording
              </a>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  </div>
);
}
