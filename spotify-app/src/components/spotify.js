// https://developer.spotify.com/
// documentation/web-playback-sdk/quik-start/#

export const authEndpoint= "https://accounts.spotify.com/authorize";

const redirectUri= "https://localhost:3000/";

const clientId = "adc34176bdd94360b39399d77e51e864"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// import React from 'react'

// const spotify = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default spotify
