import { DeleteIcon } from "./icons/DeleteIcon";
import { DocIcon } from "./icons/DocIcon";
import { ShareIcon } from "./icons/ShareIcon";
import { Xtweets } from "./ui/XTweets";
import { Ytplayer } from "./ui/YtPlayer";

interface CardProps {
    title: string,
    link: string,
    type: "x" | "youtube"
}

export function Card({title, type, link}: CardProps){
    return <div className="bg-white rounded-md border-gray-200 max-w-96 border p-4">
        <div className="flex justify-between">
            <div className="flex items-center text-lg">
                <div className="px-2 items-center">
                <DocIcon size="md"/>
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="p-2">
                    <a href={link} target="_blank">
                    <ShareIcon size="md"/>
                    </a>
                </div>
                <div className="p-2">
                    <DeleteIcon size="md"></DeleteIcon>
                </div>
            </div>
        </div>
        <div className="pt-3">
        {type === "youtube" && <Ytplayer link={link}/>}
        </div>
        {/* x */}
        {type ==="x" && <Xtweets link={link}/>}
    </div>
}