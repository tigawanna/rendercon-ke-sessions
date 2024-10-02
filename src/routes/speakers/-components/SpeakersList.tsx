import { sessionizeSpeakersQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SpeakersCard } from "./SpeakersCard";

interface SpeakersListProps {
speakerKeyword:string
}

export function SpeakersList({speakerKeyword}:SpeakersListProps){
const query = useSuspenseQuery(sessionizeSpeakersQueryOptions({name:speakerKeyword}));    
const data = query.data;
return (
 <div className='w-full h-full flex flex-col items-center pt-5 px-3 '>
 <ul className='w-full grid grid-cols-1 justify-center gap-2 md:grid-cols-2 xl:grid-cols-3'>
    {data?.map((speaker) => (
        <SpeakersCard key={speaker.id} speaker={speaker}/>
    ))}
 </ul>
 </div>
);
}
