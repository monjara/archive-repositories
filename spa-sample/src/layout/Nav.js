import React from "react";
import {NavLink} from "react-router-dom";

const navs = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/about',
        name: 'About'
    },
    {
        path: '/contact',
        name: 'Contact'
    },
];

const Nav = () => (
    <nav className='bg-purple-600 text-gray-200 h-15 p-4 shadow'>
        <ul className='flex space-x-4 justify-end'>
            {navs.map(navItem => (
                <li>
                    <NavLink exact to={navItem.path} activeClassName='border-b-2 border-white text-purple-100'>{navItem.name}</NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default Nav;
