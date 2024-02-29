import { useEffect, useState } from "react";
import {getCurrentlyPlayingItem} from "./GetCurrentlyPlayingItem";
export const SpotifyNowPlaying = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    useEffect(() => {
        Promise.all([
            getCurrentlyPlayingItem(),
        ]).then((results) => {
            console.log(results);
            setResult(results[0]);
            setLoading(false);
        });
    });
    return (
        <div></div>
        // <div>
        //     {loading && <p>Loading...</p>}
        //     {!loading && !isPlaying (
        //         <div>
        //             <SpotifyLogo />
        //             <span>Currently offline"</span>
        //         </div>
        //     )}
        //     {!loading && isPlaying(
        //         <div>
        //             <div>
        //                 <SpotifyLogo />
        //                 <span>Now playing</span>
        //             </div>
        //             <div>
        //                 <img src={result.albumImageUrl} alt={`${result.title} album art`}/>
        //                 <PlayingAnimation />
        //                 <a href={result.songUrl} target="_blank">{result.title}</a>
        //                 <p>{result.artist}</p>
        //             </div>
        //         </div>
        //     )}
        // </div>
    )
};