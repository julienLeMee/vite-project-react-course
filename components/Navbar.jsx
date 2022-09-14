import React from "react"
import reactLogo from '../src/assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <ul className="nav-items">
                  <li>Compétences</li>
                  <li>Expériences</li>
                  <li>Projets</li>
              </ul>
            </nav>
        </header>
    )
}
