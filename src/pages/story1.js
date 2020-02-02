import React from 'react';
import Slide from 'react-reveal/Slide';
import Navbar from "../components/Navbar";
import "./story1.scss";
// import Img from "gatsby-image"

const story1 = () => {
    return (
        <>
        <Navbar />
        <div className="s1container">
            <Slide top cascade>
            <h1 className='s1title'>About Me</h1>
            <div className="bio">
                <img src={"/jonathan.jpg"} alt="jonathan" />
                <div className="container">
                    <p className="s1subtitle is-2">Hello, my name is <b>Jonathan Nicholas.</b> I'm a freshman at Universitas
                        Indonesia studying Computer Science.</p>
                    <div className="affiliates">
                        <a href="http://github.com/jojonicho">
                            <img src={"/git.png"} alt="git"/>
                        </a>
                        <a href="https://www.linkedin.com/in/jonathan-nicholas-867444182/">
                            <img src={"/linkedin.png"} alt="linkedin"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card">
                <h1 className="s1title">Further Info</h1>
                <div className="info">
                    <ul>
                        <li>NPM: 1906293133</li>
                        <li>Angkatan: Maung 2019</li>
                        <li>Hobi: Data Science and Web Development</li>
                        <li>Asal SMA: Kolese Kanisius</li>
                        <li>Quirk: None</li>
                    </ul>
                </div>
            </div>
            </Slide>
        </div>
        </>
    )
}

export default story1