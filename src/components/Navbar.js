import React, { useState } from "react"
import { Link } from "gatsby"
import "../pages/style.scss"
import Fade from 'react-reveal/Fade';
import SVG from "./SVG"

const Navbar = () => {
    const [active, setActive] = useState('false');
    return (
        <nav className="navbar is-transparent is-spaced" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/">
                    <SVG name="Mylogo" />
                </Link>
                <Link role="button" onClick={() => setActive(!active)} className={`navbar-burger ${(active === false) ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>
            <Fade top distance='15px' duration={600}>
                <div className={`navbar-menu ${(active === false) ? 'is-active' : ''}`}>
                    <div className="navbar-end is-one-quarter">
                        <Link to="/blog" className="navbar-item is-narrow">
                            <p>Blog</p>
                        </Link>
                    </div>
                </div>
            </Fade>
        </nav>
    );
}

export default Navbar
