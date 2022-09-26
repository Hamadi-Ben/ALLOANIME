import React from 'react'
import Layout from '../components/Layout'

const Op = () => {
  return (
    <Layout>
      <div className="container">
        <p className="flow-text center white-text"> Login </p>
        <div className="row"></div>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="username" type="text" className="validate white-text" />
              <label htmlFor="username"> Username </label>
            </div>
            <div className="input-field col s6">
              <input id="password" type="text" className="validate white-text" />
              <label htmlFor="password"> Password </label>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default Op
