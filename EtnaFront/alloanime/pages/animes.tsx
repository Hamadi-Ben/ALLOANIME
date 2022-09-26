// import Image from 'next/image'
import Link from 'next/dist/client/link'
import axios from 'axios'
import React, { Key } from 'react'
import Layout from '../components/Layout'
// import  Styles  from '../styles/globals.css'

const AllAnime = (props: { data: any }) => {
  const animes = props.data

  return (
    /* Toutes les lignes de code doivent être notées dans cette section "Layout" qui fait office de body */
    <Layout>
      {/* The Title section */}
      <section>
        <div className="container">
          <h1 className="blue-text center">アロアニメへようこそ</h1>
          <h6 className="yellow-text center ">ALLOANIME E YOKOSO</h6>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <p className="center">Liste des Animés:</p>
            <div className="center">
              <input className="formControl" type="text" color="grey"></input>
            </div>
            <div className="center">
              <ul>
                {animes.map(
                  (
                    anime: {
                      id: Key
                      title: String
                      author: String
                      year: Number
                      description: String
                      price: String
                    },
                    index: number
                  ) => (
                    <li key={index}>
                      <Link
                        href={{
                          pathname: '/[id]',
                          query: { id: anime.id }
                        }}
                      >
                        <a>{anime.title}</a>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* The Footer section */}
      <section>
        <div className="section"></div>
        <div className="divider"></div>
        <footer className="page-footer background color grey">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Pour Conclure...</h5>
              <p className="grey-text text-lighten-4">Voici en quelques liens qui pourraient vous intéresser !</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Liens</h5>
              <ul>
                <li>
                  <a
                    className="black-text "
                    href="https://rendu-git.etna-alternance.net/module-9046/activity-49567/group-985301"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a className="black-text" href="https://nextjs.org/" target="_blank" rel="noreferrer">
                    Next JS
                  </a>
                </li>
                <li>
                  <a className="black-text" href="https://etna.io/?xtor=SEC-38-GOO" target="_blank" rel="noreferrer">
                    ETNA
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">© 2022 EtnAPI Copyright</div>
          </div>
        </footer>
      </section>
    </Layout>
  )
}

export default AllAnime

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:4000/anime')
  return {
    props: { data: res.data.slice(0, 10) }
  }
}
