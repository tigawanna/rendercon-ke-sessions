import { sessionizeOneSpeakersQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SpeakersCard } from "./SpeakersCard";

interface SpeakerByIdProps {
speaker:string
}

export function SpeakerById({speaker}:SpeakerByIdProps){
const query = useSuspenseQuery(sessionizeOneSpeakersQueryOptions({speaker_id:speaker}));
if(!query.data) return null
return <SpeakersCard speaker={query.data}/>  
}
