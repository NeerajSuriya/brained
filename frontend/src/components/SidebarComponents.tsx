import type { ReactElement } from "react";

export function SidebarCompoenents ({text, icon}:{
    text: string,
    icon: ReactElement
}){
    return <div className="px-7 flex gap-4">
        {icon} {text}
    </div>
}   
