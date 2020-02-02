import React from "react"
import Typed from "react-typed"

import "./style.scss"
import Navbar from "../components/Navbar"
import SVG from "../components/SVG"

const Bloglist = () => {
    return (
        <>
            <Navbar />
            <div className="columns">
                <div className="column">
                    <div className="card">
                        <div className="card-content">
                            <div className="content">
                                <div className="columns">
                                    <div className="column">
                                        <p className="title is-2">
                                            <Typed
                                                strings={['Writing ...']}
                                                typeSpeed={180}
                                                backSpeed={40}
                                                backDelay={1000}
                                                smartBackspace
                                                loop
                                            />
                                        </p>
                                    </div>
                                    <div className="column">
                                        <SVG name="Construction" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Bloglist
