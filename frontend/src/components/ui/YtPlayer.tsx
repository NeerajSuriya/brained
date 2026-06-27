interface YtProps{
    link: string,
}

const getEmbedLink = (url: string)=>{
    let videoId: string = "";

    if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0]
    } else{
        videoId = new URL(url).searchParams.get("v") || "";
    }
    return `https://youtube.com/embed/${videoId}`;
}
    
export function Ytplayer(props: YtProps){
    const embedlink = getEmbedLink(props.link);
    console.log(embedlink)
    return <>
    <iframe className="w-full" width="560" height="315" src={embedlink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </>
}


