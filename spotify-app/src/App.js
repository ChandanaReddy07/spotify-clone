import './App.css';
import Login from './components/login';
import { getTokenFromUrl } from './components/spotify';
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null)
  const [{token }, dispatch] = useDataLayerValue();

  //run a codde based on a condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      {
       
      spotify.setAccessToken(_token);
       
      }

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.getMe().then(user => {
        console.log('🐼', user);
        dispatch({
          type: 'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log(" token>>>>", playlists);

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists

        })
      })

      spotify.getPlaylist('37i9dQZEVXcDr8VCEr2JYG').then(response => {
        console.log("response>>>>", response)
        dispatch({
          type: 'SET_DISCOVER',
          discover_weekly: response

        })
      })
    }

    console.log("i have a token>>>>", token);
  },  [token, dispatch])
  return (
    <div className="App">
      {
        token ?
          (<Player spotify={spotify} />)
          : (<Login />)
      }

    </div>
  );
}

export default App;
