import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typed from "react-typed"
import SVG from "../components/SVG"
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import "./style.scss"
import SEO from "../components/seo"

const MangaRank = () => {
  const data = useStaticQuery(graphql`
  query MangaQuery {
      anilist {
        User(name: "jojonicho") {
          favourites {
            manga {
              edges {
                node {
                  title {
                    english
                    native
                    romaji
                  }
                  coverImage {
                    large
                  }
                  genres
                  meanScore
                }
              }
            }
          }
        }
      }
    }      

  `)
  const mangas = data.anilist.User.favourites.manga.edges
  return (
    <div className="section">
      <p className="title is-3 box is-shadowless is-marginless">
        Current Reading List
          </p>
      <Fade bottom cascade>
        <div className="tile">
          {mangas && mangas.map(manga => {
            return (
              <div className="card box is-marginless">
                <div className="card-image is-marginless">
                  <figure className="image">
                    <img className="is-marginless" src={manga.node.coverImage.large} alt={manga.node.title.romaji} />
                  </figure>
                </div>
              </div>
            );
          })}
        </div>
      </Fade>

    </div>
  )
}


const IndexPage = () => {
  const mylist = [
    'React',
    'Gatsby',
    'Data',
    'GraphQL',
  ]
  const [count, setCount] = useState(0);
  const [active, setActive] = useState('false');
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="box is-shadowless">
            <Link to="/">
              <SVG name="Mylogo" />
            </Link>
          </div>

          <Link role="button" onClick={() => setActive(!active)} className={`navbar-burger ${(active === false) ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link>
        </div>
      </nav>
      <div className="container">
        <SEO title="Jonathan Nicholas" />
        <div className="section columns">
          <div className="column">
            <p className="subtitle"> hello, my name is </p>
            <p className="title is-2">Jonathan Nicholas</p>
            <p className="subtitle is-4">I am currently learning</p>
            <p id="learn" className="title is-1">
              <Typed
                strings={mylist}
                typeSpeed={25}
                backSpeed={40}
                backDelay={850}
                onLastStringBackspaced={() => {
                  setCount(curr => (curr < 3) ? curr + 1 : 0)
                }}
                loop
              />
            </p>
          </div>

          <div className='column'>
            <Rotate>
              <Pulse duration={2000}>
                <Rotate spy={count}>
                  <Pulse spy={count} duration={1700}>
                    <SVG name={mylist[count]} />
                  </Pulse>
                </Rotate>
              </Pulse>
            </Rotate>
          </div>

        </div>
        <MangaRank />
      </div>
    </>
  )
}


export default IndexPage