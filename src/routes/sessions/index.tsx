import { CardsListSuspenseFallback } from '@/components/loaders/GenericDataCardsListSuspenseFallback';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense, useEffect } from 'react';
import { z } from "zod";
import { Sessions } from './-components/Sessions';

const searchParams = z.object({
  session: z.string().optional(),
});
export const Route = createFileRoute("/sessions/")({
  component: SessionsPage,
  validateSearch: (search) => searchParams.parse(search),
});


export function SessionsPage(){
  useEffect(() => {
    document.title = "Sessions"
  })
return (
 <div className='w-full h-full flex flex-col items-center justify-center'>
  <Suspense fallback={<CardsListSuspenseFallback cards={12} />}>
    <Sessions/>
  </Suspense>
 </div>
);
}
