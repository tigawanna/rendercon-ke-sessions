import { SessionizeSpeakersMain } from "@/api/sessionize-speakers";
import { Link } from "@tanstack/react-router";

interface SpeakersCardProps {
  speaker: SessionizeSpeakersMain;
}

export function SpeakersCard({speaker}:SpeakersCardProps){
return (
  <Link
    to="/speakers/$speaker"
    params={{speaker:speaker.id}}
    className="flex flex-col md:flex-row h-fit md:h-56 pb-3 w-[95%] items-center gap-3 rounded-xl bg-gradient-to-r from-base-300 to-base-200 p-3 hover:scale-95 hover:via-secondary/30 hover:text-primary hover:duration-300 hover:ease-in-out"
  >
    <img
      src={speaker.profilePicture}
      alt={speaker.fullName}
      className="aspect-square object-cover w-full h-[50%] md:max-h-full md:h-full md:w-auto"
    />
    <div className="">
      <h2 className="text-2xl line-clamp-2">{speaker.fullName}</h2>
      <p className="underline underline-offset-8 line-clamp-2"> {speaker.tagLine}</p>
      <p className="line-clamp-4 pt-3 text-sm brightness-75">{speaker.bio}</p>
    </div>
  </Link>
);
}
