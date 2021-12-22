import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
const Sidebar = () => {
    const [{playlists},dispatch]=useDataLayerValue();
    return (
        <div className='sidebar'>
            <img className="sidebar__logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
            alt="" />
            <SidebarOption Icon={HomeIcon} option="Home"/>
            <SidebarOption Icon={SearchIcon} option="Search"/>
            <SidebarOption Icon={LibraryMusicIcon} option="Your Library"/>

            <strong className="sidebar__title">PLAYLIST</strong>
            <hr/>
            {playlists?.items?.map((playlist)=>(
            <SidebarOption option={playlist.name}/>

            ))
            }

            <SidebarOption option="Romantic"/>

     </div>
    )
}

export default Sidebar
