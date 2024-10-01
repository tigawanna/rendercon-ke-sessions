import { useState } from "react";

interface SideDrawerContainerProps {

}

export function SideDrawerContainer({}:SideDrawerContainerProps){
const [open,setopen] = useState(false)
if(!open){
    return 
}
return (
 <div className='w-20 h-full flex flex-col items-center justify-center'>

 </div>
);
}
