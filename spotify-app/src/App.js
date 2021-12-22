import './App.css';
import Login from './components/login';
import { getTokenFromUrl } from './components/spotify';
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)
  const [{},dispatch] = useDataLayerValue();

  //run a codde based on a condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

   

      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        console.log('🐼',user);  
        
        dispatch({
          type:'SET_USER',
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLIST",
          playlists:playlists

        })
      })

    }

    console.log("i have a token>>>>", token);
  }, [])
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
