import React from 'react';
import Logo from '../img/checked.svg';


const NavBar = () => {
    return (
        <nav className="nav-wrapper brown darken-3">
            <div className="container">
                <img className="logo" src={Logo} alt=''></img>
                <div className="brand-logo center">Todo App</div>
                <ul className="right links">
                </ul>
            </div>
        </nav>
    )

}

export default NavBar;