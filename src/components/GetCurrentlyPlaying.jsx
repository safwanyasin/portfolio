import SpotifyWebApi from 'spotify-web-api-js';

const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;
// const refresh_token = process.env.REACT_APP_SPOTIFY_REFRESH_TOKEN;

// const basic = btoa(`${client_id}:${client_secret}`);
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
  });
  return response.json();
};

// const currently_playing_url = "https://api.spotify.com/v1/me/player/currently-playing";
export const getCurrentlyPlaying = async () => {
  const { access_token } = await getAccessToken();
  console.log(access_token);

  // credentials are optional
  var spotifyApi = new SpotifyWebApi({
    clientId: client_id,
    clientSecret: client_secret,
    redirectUri: 'http://localhost:3000/'
  });

  spotifyApi.setAccessToken(access_token);
  spotifyApi.getMyCurrentPlayingTrack()
  .then(function(data) {
    console.log('Now playing: ' + data.body.item.name);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
};
