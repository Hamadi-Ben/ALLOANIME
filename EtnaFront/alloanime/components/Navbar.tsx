import React, { Fragment } from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <Fragment>
      <nav className="light-blue">
        <div className="nav-wrapper">
          <div className="container">
            <Link href="/">
              <ul className="left">
                <a className="brand-logo">
                  ALLOANIME
                </a>
              </ul>
            </Link>
          </div>
          <ul className="right">
            <li>
              <Link href="/animes">
                <a> Tous Nos Animés</a>
              </Link>
            </li>
            <li>
              <Link href="/AjoutAnimes">
                <a> Ajoutez Votre Animés</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a> Login </a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a href="register"> Register </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
