import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import {Avatar} from "@material-ui/core"

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <SearchIcon/>
                <input type="text" placeholder="Search for Artist , Songs," />

            </div>
            <div className="header__right">
                <Avatar src="" alt="RQ"/>

            </div>
        </div>
    )
}

export default Header
