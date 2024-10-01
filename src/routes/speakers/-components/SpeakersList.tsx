import { sessionizeSpeakersQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SpeakersCard } from "./SpeakersCard";

interface SpeakersListProps {

}

export function SpeakersList({}:SpeakersListProps){
const query = useSuspenseQuery(sessionizeSpeakersQueryOptions({name: ""}));    
const data = query.data;
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
 <ul className='w-full grid grid-cols-1 justify-center gap-4 md:grid-cols-2 lg:grid-cols-4'>
    {data?.map((speaker) => (
        <SpeakersCard key={speaker.id} speaker={speaker}/>
    ))}
 </ul>
 </div>
);
}
