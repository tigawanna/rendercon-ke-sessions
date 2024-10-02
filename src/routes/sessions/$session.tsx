import { CardsListSuspenseFallback } from '@/components/loaders/GenericDataCardsListSuspenseFallback';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import { OneSession } from './-components/OneSession';

export const Route = createFileRoute("/sessions/$session")({
  component: OneSessionPage,
});

export function OneSessionPage(){
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  <Suspense fallback={<CardsListSuspenseFallback cards={4} />}>
    <OneSession/>
  </Suspense>
 </div>
);
}
