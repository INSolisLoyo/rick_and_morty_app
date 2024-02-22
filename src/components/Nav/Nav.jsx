import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css"

const Nav = (props) => {
    return (
        <nav>
            <SearchBar onSearch={props.onSearch} />
            <div className={style.button_container}>
                <NavLink to='/about'>
                    <button>About</button>
                </NavLink>
                <NavLink to='/home'>
                    <button>Home</button>
                </NavLink>
                <NavLink to='/favorites'>
                    <button>Favorites</button>
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav;