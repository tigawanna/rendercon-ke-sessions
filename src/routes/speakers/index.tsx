import { createFileRoute } from '@tanstack/react-router'
import { Speakers } from './-components/Speakers';

export const Route = createFileRoute('/speakers/')({
  component:SpeakersPage,
})

export function SpeakersPage(){
return (
 <div className='w-full min-h-screen h-full flex flex-col items-center justify-center'>
  <Speakers/>
 </div>
);
} 
