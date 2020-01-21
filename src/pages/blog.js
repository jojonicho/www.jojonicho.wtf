import React from "react"
import "./style.scss"
import SVG from "../components/SVG"
// import Nav from "../components/Navbar"

const Bloglist = () => {
    return (
        <div className="columns">
            {/* <div className="box is-shadowless">
                <nav className="navbar" role="navigation" aria-label="main navigation">
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
                    <div className={`navbar-menu ${(active === false) ? 'is-active' : ''}`}>
                        <div className="navbar-end">
                            <Link to="/blog" className="navbar-item">Blog</Link>
                        </div>
                    </div>
                </nav>
            </div> */}
            <div className="column">
                <div className="card">
                    <div className="card-content is-marginless">
                        <div className="content">
                            <p className="title is-2">
                                Blog under construction
                      </p>
                        </div>
                    </div>
                </div>
                {/* <div className="navbar-end">
                    <Link to="/" className="navbar-item">HOME</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Bloglist