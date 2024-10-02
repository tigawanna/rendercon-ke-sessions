import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';
import { OneSpeaker } from './-components/OneSpeaker';

export const Route = createFileRoute('/speakers/$speaker')({
  component: OneSpeakerPage,
})


export function OneSpeakerPage(){
return (
 <div className='w-full h-full min-h-screen flex flex-col items-center justify-center'>
  <Suspense>
    <OneSpeaker/>
  </Suspense>
 </div>
);
}
