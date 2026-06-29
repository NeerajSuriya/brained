import type { ReactElement } from "react";

export function SidebarCompoenents ({text, icon}:{
    text: string,
    icon: ReactElement
}){
    return <div> 
        <div className="flex gap-4 cursor-pointer px-2 py-2 hover:bg-gray-200 rounded max-w-48">
            {icon} {text}
        </div>
    </div>
}   
