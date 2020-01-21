import React, { useState, Link } from "react"
import "../pages/style.scss"
import SVG from "./SVG"

const NavBar = () => {
    const [active, setActive] = useState('false');
    return (
        <div className="box is-shadowless">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/">
                        <SVG name="Mylogo" />
                    </Link>
                    <Link role="button" onClick={() => setActive(!active)} className={`navbar-burger ${(active === false) ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </Link>
                </div>
                <div id="navbarBasicExample" className={`navbar-menu ${(active === false) ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <Link to="/blog" className="navbar-item">Blog</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar