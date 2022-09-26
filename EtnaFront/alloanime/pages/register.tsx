import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import { createUser } from '../Services/Users/UsersService'

const Register = () => {
  return (
    <Layout>
      <div className="container">
        <p className="flow-text center white-text"> Register </p>
        <div className="row"></div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s10">
              <input id="username" type="text" className="validate white-text" />
              <label htmlFor="username"> Nom d'utilisateur </label>
            </div>
            <div className="input-field col s10">
              <input id="email" type="text" className="validate white-text" />
              <label htmlFor="email"> Email </label>
            </div>
            <div className="input-field col s10">
              <input id="password" type="text" className="validate white-text" />
              <label htmlFor="password"> Mot de passe </label>
            </div>
            <div className="input-field col s6">
              <button className="btn pulse" type="submit" onClick={() => createUser()}>
                {' '}
                <link href="/animes"></link>
                Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Register
