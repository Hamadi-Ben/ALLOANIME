import React from 'react'
import Layout from '../components/Layout'
// import { Style } from '../styles/globals'
import { fetchDataUsers } from '../Services/Users/UsersService'

const Login = () => {
  return (
    <Layout>
      <div className="container">
        <p className="flow-text center white-text"> Login </p>
        <div className="row"></div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="username" type="text" className="validate white-text" />
              <label htmlFor="username"> Nom d'utilisateur </label>
            </div>
            <div className="input-field col s6">
              <input id="password" type="text" className="validate white-text" />
              <label htmlFor="password"> Mot de passe </label>
            </div>
            <div className="input-field col s6">
              <button className="btn pulse" type="submit" onClick={() => fetchDataUsers}>
                Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Login
