import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
// import  Styles  from 'styles/globals.css

const Home = () => {
  return (
    /* Toutes les lignes de code doivent être notées dans cette section "Layout" qui fait office de body */
    <Layout>
      {/* The Title section */}
      <section>
        <div className="container">
          <h1 className="blue-text center">アロアニメへようこそ</h1>
          <h6 className="yellow-text center">ALLOANIME E YOKOSO</h6>
        </div>
      </section>
      <section>
        <div className="row">
          <h4 className="center">Animés du moment:</h4>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="">
                <Image
                  className="circle responsive-img"
                  alt="img"
                  src="/image/snk.png"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/db.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/FMA.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/HH.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/jojo.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/OPM.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/SKR.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/toriko.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/vinlnd.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/naruto.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/onepiece.jpg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
          <div className="col s2">
            <figure className="col-3 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center">
              <a href="https://anime-sama.fr/anime/shingeki-no-kyojin">
                <Image
                  className="circle responsive-img"
                  alt=""
                  src="/image/Bers.jpeg"
                  objectPosition="center"
                  width={200}
                  height={200}
                  priority={true}
                />
              </a>
            </figure>
          </div>
        </div>
      </section>
      {/* The Contact section */}
      <section className="page-footer background color black">
        <div className="container">
          <h4 className="center">Contact</h4>
          <div className="divider"></div>
          <p> Restons en contact et parlons de votre prochaine réservation</p>
          <div className="input-field s6">
            <input id="nom" type="text" className="validate white-text" />
            <label htmlFor="nom"> Nom </label>
          </div>
          <div className="input-field s6">
            <input id="prenom" type="text" className="validate white-text" />
            <label htmlFor="prenom"> Prénom </label>
          </div>
          <div className="input-field s6">
            <input id="email" type="text" className="validate white-text" />
            <label htmlFor="email"> Email </label>
          </div>
          <div className="input-field s6">
            <input id="sujet" type="text" className="validate white-text" />
            <label htmlFor="sujet"> Sujet </label>
          </div>
          <button className="btn pulse" type="submit">
            Contactez nous
          </button>
        </div>
      </section>
      {/* The Footer section */}
      <section>
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

export default Home
