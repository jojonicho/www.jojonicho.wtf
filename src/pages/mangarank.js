import React from "react"
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby"
import "./style.scss"

const MangaRank = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
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
                      medium
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
        <div>
            <SEO title="Manga Ranking" />
            {console.log(data)}
            {console.log(mangas)}
            {mangas && mangas.map(manga => {
                return <h4>{manga.node.title.romaji}</h4>
            })}
        </div>
    )
}

export default MangaRank
