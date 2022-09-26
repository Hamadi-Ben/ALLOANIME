import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

const Layout = ({ children }: any) => {
  return (
    <Fragment>
      <Head>
        <title> Allo Anime</title>
        <link rel="icon" href="https://i.pinimg.com/originals/db/ad/bd/dbadbd78e11b9bdf2823a674af323bad.png"></link>
      </Head>
      <Navbar />
      {children}
    </Fragment>
  )
}

export default Layout
