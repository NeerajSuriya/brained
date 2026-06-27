interface XProps{
    link: string,
}

export function Xtweets(props: XProps){
    return <>
    <blockquote className="twitter-tweet"><a href={props.link}/></blockquote>
    </>
}

