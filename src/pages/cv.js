import React from 'react';
import { Navbar } from "./story3";
const cv = () => {
    return (
        <>
            <Navbar />
            <div className="section">
                <div className="card">
                    <div className="card-content">
                        <div className='columns is-mobile'>
                            <div className="column">
                                <img src={"/jonathan.jpg"} alt="jonathan" />
                            </div>
                            <div className='column is-two-thirds'>
                                <p className="title">Jonathan Nicholas <br />Computer Science Freshman<br />Universitas Indonesia</p>
                            </div>
                        </div>
                        <div className='columns has-text-centered is-mobile'>
                            <div className="column is-one-third">
                                <p className="title">Experiences</p>
                                <div className="card-content has-text-left">
                                    PERAK
                                    <p className="has-text-danger">Web Developer</p>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <p className="title">Achievements</p>
                                <div className="card-content has-text-left">
                                    Datavidia Arkavidia 2019
                                    <p className="has-text-danger">Third Place</p>
                                </div>
                                <div className="card-content has-text-left">
                                    SEA Undergraduate Scholarship
                                    <p className="has-text-danger">Contract</p>
                                </div>
                            </div>
                            <div className='column is-one-third'>
                                <p className="title">Organizations</p>
                                <div className="card-content has-text-left">
                                    RISTEK
                                    <p className="has-text-danger">Data Science SIG</p>
                                </div>
                                <div className="card-content has-text-left">
                                    BEM PTI
                                    <p className="has-text-danger">Semoga</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cv