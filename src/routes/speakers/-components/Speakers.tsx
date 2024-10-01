import { CardsListSuspenseFallback } from "@/components/loaders/GenericDataCardsListSuspenseFallback";
import { Suspense } from "react";
import { SpeakersList } from "./SpeakersList";

interface SpeakersProps {

}

export function Speakers({}:SpeakersProps){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
        <Suspense fallback={<CardsListSuspenseFallback />}>
            <SpeakersList />
        </Suspense>
 </div>
);
}
