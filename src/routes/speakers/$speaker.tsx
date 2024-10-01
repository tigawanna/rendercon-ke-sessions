import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/speakers/$speaker')({
  component: OneSpeakerPage,
})


export function OneSpeakerPage(){
return (
 <div className='w-full h-full min-h-screen flex flex-col items-center justify-center'>
  <h1 className="text-7xl font-bold text-primary">One Speaker</h1>
 </div>
);
}
