import React from 'react'
import Layout from '../components/Layout'
// import { Style } from '../styles/globals'
import { createAnime } from '../Services/Users/AnimesService'

const AddAnime = () => {
  return (
    <Layout>
      <div className="container">
        <p className="flow-text center white-text"> PROPOSEZ NOUS UN NOUVELLE ANIME: </p>
        <div className="row"></div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="title" type="text" className="validate white-text" />
              <label htmlFor="title"> Titre </label>
            </div>
            <div className="input-field col s6">
              <input id="author" type="text" className="validate white-text" />
              <label htmlFor="author"> Auteur </label>
            </div>
            <div className="input-field col s6">
              <input id="year" type="number" className="validate white-text" />
              <label htmlFor="year"> Année </label>
            </div>
            <div className="input-field col s6">
              <input id="description" type="text" className="validate white-text" />
              <label htmlFor="description"> Description </label>
            </div>
            <div className="input-field col s6">
              <input id="price" type="text" className="validate white-text" />
              <label htmlFor="price"> Prix </label>
            </div>
            <div className="input-field col s6">
              <button className="btn " type="submit" onClick={() => createAnime()}>
                Envoyer
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default AddAnime
