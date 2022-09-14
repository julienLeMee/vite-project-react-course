import React from "react"
import reactLogo from './assets/react.svg'

export default function Header() {
    return (
        <header>
            <nav className="nav">
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
            </nav>
        </header>
    )
}
