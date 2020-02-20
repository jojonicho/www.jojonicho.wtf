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
                                <p className="name has-text-weight-semibold has-text-dark">Jonathan Nicholas <br />Computer Science Freshman<br />Universitas Indonesia</p>
                            </div>
                        </div>
                        <div className='columns has-text-centered is-mobile'>
                            <div className="column is-one-half">
                                <p className="achievement has-text-weight-semibold has-text-dark">Experiences</p>
                                <div className="card-content has-text-left desc has-text-weight-semibold">
                                    PERAK
                                    <p className="has-text-danger">Web Developer</p>
                                </div>
                            </div>
                            <div className='column is-one-half'>
                                <p className="achievement has-text-weight-semibold has-text-dark">Organizations</p>
                                <div className="card-content has-text-left desc has-text-weight-semibold">
                                    RISTEK
                                    <p className="has-text-danger">Data Science SIG</p>
                                </div>
                                <div className="card-content has-text-left desc has-text-weight-semibold">
                                    BEM Fasilkom UI
                                    <p className="has-text-danger">PTI</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns has-text-centered is-mobile">
                            <div className='column'>
                                <p className="achievement has-text-weight-semibold has-text-dark">Achievements</p>
                                <div className="card-content has-text-left desc has-text-weight-semibold">
                                    Datavidia Arkavidia 2019
                                    <p className="has-text-danger">Third Place</p>
                                </div>
                                <div className="card-content has-text-left desc has-text-weight-semibold">
                                    SEA Undergraduate Scholarship
                                    <p className="has-text-danger">Contract</p>
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