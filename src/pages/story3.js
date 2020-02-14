import React, { useState } from "react"
import { Link } from "gatsby"
import "./style.scss"
import SEO from "../components/seo"
import Slide from 'react-reveal/Slide';
import SVG from "../components/SVG"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';

export const Navbar = () => {
    const [active, setActive] = useState('false');
    return (
        <nav className="navbar is-danger" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="home">
                    <Link to="/">
                        <SVG name="Pokeball" />
                    </Link>
                </div>
                <Link role="button" onClick={() => setActive(!active)} className={`navbar-burger ${(active === false) ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </Link>
            </div>
            <Slide top distance='15px' duration={600}>
                <div className={`navbar-menu ${(active === false) ? 'is-active' : ''}`}>
                    <div className="navbar-end is-one-quarter">
                        <Link to="/blog" className="navbar-item is-narrow">
                            <p>Blog</p>
                        </Link>
                    </div>
                </div>
            </Slide>
        </nav>
    );
}

const Story3 = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Navbar />
            <div className="section container">
                <SEO title="Jonathan Nicholas" />
                <SEO title="jojonicho" />
                <div className="columns is-7 is-mobile is-vcentered">
                    <div className="column is-one-fourth me">
                        <div class="card-image">
                            <figure class="image is-3by3">
                                <img src={"/jonathan.jpg"} alt="jonathan" />
                            </figure>
                        </div>
                    </div>
                    <div className="column is-two-thirds">
                        {/* <p className="subtitle"> hello, my name is </p> */}
                        <p className="myname">Hello, my name is </p> <p className="has-text-danger myname">Jonathan Nicholas</p>
                    </div>
                </div>
            </div>
            <div>
                <SVG name='blob' />
            </div>
            <div className='section container'>
                <button onClick={openModal}>
                    <div className="container proj">
                        <img src={"/myproj.png"} alt="myproj" />
                    </div>
                </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="section container">
                        <p className="title has-text-centered">My Projects</p>
                        <Carousel autoPlay={true} useKeyboardArrows={true} infiniteLoop={true}>
                            <div className="container proj">
                                <img src={"/myproj.png"} alt="myproj" />
                            </div>
                            <div className="container proj">
                                <img src={"/pikap.png"} alt="myproj" />
                            </div>
                        </Carousel>
                    </div>
                </Modal>
            </div>

            {/* <div className="section container">
                <p className="title has-text-centered">My Projects</p>
                <Carousel>
                    <div className="container proj">
                        <img src={"/myproj.png"} alt="myproj" />
                    </div>
                    <div className="container proj">
                        <img src={"/myproj.png"} alt="myproj" />
                    </div>
                    <div className="container proj">
                        <img src={"/myproj.png"} alt="myproj" />
                    </div>
                </Carousel>
            </div> */}
            <div className='section'>
                <p className="title has-text-centered">Interested?<br />Check out my</p>
                <Link to='/cv'>
                    <p className="title has-text-centered has-text-danger">CV</p>
                </Link>
            </div>
        </>
    );
}

export default Story3