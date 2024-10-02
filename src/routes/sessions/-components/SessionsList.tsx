import { sessionizeSessionsQueryOptions, sessionizeSpeakersQueryOptions } from "@/api/query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SessionCard } from "./SessionCard";


interface SessionsListProps {
sessionskeywords:string
}

export function SessionsList({sessionskeywords}:SessionsListProps){
// const query = useSuspenseQuery(sessionizeSpeakersQueryOptions({name:sessionskeywords}));    
const query = useSuspenseQuery(sessionizeSessionsQueryOptions({name:sessionskeywords}));   
const data = query.data.flatMap((session) => session.sessions);
return (
 <div className='w-full h-full flex flex-col items-center pt-5 px-3 '>
 <ul className='w-full grid grid-cols-1 justify-center gap-4 md:grid-cols-2 xl:grid-cols-3'>
    {data?.map((session) => (
        <SessionCard key={session.id} session={session}/>
    ))}
 </ul>
 </div>
);
}
