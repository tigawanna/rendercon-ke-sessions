import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import { OneSpeaker } from './-components/OneSpeaker';
import { CardsListSuspenseFallback } from '@/components/loaders/GenericDataCardsListSuspenseFallback';

export const Route = createFileRoute('/speakers/$speaker')({
  component: OneSpeakerPage,
})


export function OneSpeakerPage(){
return (
 <div className='w-full h-full min-h-screen flex flex-col items-center justify-center'>
  <Suspense fallback={<CardsListSuspenseFallback cards={4} />}>
    <OneSpeaker/>
  </Suspense>
 </div>
);
}
