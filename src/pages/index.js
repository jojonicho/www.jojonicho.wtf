import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Typed from "react-typed"
import SVG from "../components/SVG"
import Rotate from 'react-reveal/Rotate';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Navbar from "../components/Navbar"
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
      <Fade bottom cascade duration={1800}>
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
  const stories = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]
  const [count, setCount] = useState(4);
  return (
    <>
      <Navbar />
      <div className="container">
        <SEO title="Jonathan Nicholas" />
        <SEO title="jojonicho" />
        <div className="box is-shadowless columns welcome">
          <div className="column">
            <p className="subtitle"> hello, my name is </p>
            <p className="title is-2">Jonathan Nicholas</p>
            <p className="subtitle is-4">I am currently learning</p>
            <p id="learn" className="title is-1">
              <Typed
                strings={mylist}
                typeSpeed={150}
                backSpeed={40}
                backDelay={1600}
                preStringTyped={() => {
                  setCount(curr => (curr < 3) ? curr + 1 : 0)
                }}
                loop
              />
            </p>
          </div>

          <div className='column'>
            <Rotate spy={count}>
              <Pulse spy={count} duration={1700}>
                <SVG name={mylist[count]} />
              </Pulse>
            </Rotate>
          </div>
        </div>
        <MangaRank />
        <Fade bottom cascade duration={1800}>
          <div className="container">
            <p className="title is-3 box is-shadowless is-marginless">
              Pepew Story
          </p>
            <div className="columns is-desktop">
              {stories.map(story => {
                return (
                  <div className="column">
                    <div className="card">
                      <div className="card-content">
                        <Link to={`story${story}`}>
                          <div className="content">
                            <p className="title is-5 has-text-centered">{story}</p>
                          </div>
                          </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}


export default IndexPage