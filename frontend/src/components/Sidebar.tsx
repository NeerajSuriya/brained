import { XIcon } from "./icons/XIcon";
import { YtIcon } from "./icons/YtIcon";
import { SidebarCompoenents } from "./SidebarComponents";


export function Sidebar(){
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
        <div className="pt-4 pl-4">
            <SidebarCompoenents text="X" icon={<XIcon/>}/>
            <SidebarCompoenents text="Youtube" icon={<YtIcon/>}/>
        </div>
    </div>
}