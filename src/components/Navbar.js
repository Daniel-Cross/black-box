import React, { Fragment } from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <Fragment>
            <div className="Navbar">
                <h1>Black Box</h1>
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Login</li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Navbar;