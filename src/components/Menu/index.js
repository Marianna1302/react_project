import React from 'react';
import './style.scss';
import {NavLink} from 'react-router-dom';

function Menu(props) {

    return (
        <ul id="menu">
            <li><NavLink exact to = "/">photos</NavLink></li>
            <li><NavLink to = "/favourite">favourite</NavLink></li>

        </ul>
    )
}

export default Menu;
