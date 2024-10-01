import { SessionizeSpeakersMain } from "@/api/sessionize-speakers";
import { Link } from "@tanstack/react-router";

interface SpeakersCardProps {
  speaker: SessionizeSpeakersMain;
}

export function SpeakersCard({speaker}:SpeakersCardProps){
return (
  <Link to={speaker.id} className="flex h-56 w-[95%] items-center gap-3 rounded-xl bg-gradient-to-r from-base-300 to-base-200 p-3 hover:scale-95 hover:via-secondary/30 hover:text-primary hover:duration-300 hover:ease-in-out ">
    {speaker.fullName}
  </Link>
);
}
