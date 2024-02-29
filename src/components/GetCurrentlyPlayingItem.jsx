import { getCurrentlyPlaying } from "./GetCurrentlyPlaying";
export const getCurrentlyPlayingItem = async () => {
    const response = await getCurrentlyPlaying();
    if (response.status === 204 || response.status > 400) {
        return false;
    }
    const song = await response.json();
    console.log(song);
    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;
    
    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };
}