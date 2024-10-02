import { createFileRoute } from '@tanstack/react-router'
import { Speakers } from './-components/Speakers';
import { z } from 'zod';

const searchParams = z.object({
  speaker: z.string().optional(),
})
export const Route = createFileRoute('/speakers/')({
  component:SpeakersPage,
  validateSearch: (search) => searchParams.parse(search)
})

export function SpeakersPage(){
return (
 <div className='w-full min-h-screen h-full flex flex-col items-center justify-center'>
  <Speakers/>
 </div>
);
} 
