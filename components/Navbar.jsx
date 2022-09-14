import React from "react"
import reactLogo from '../src/assets/react.svg'

export default function Navbar() {
    return (
        <header>
            <nav className="nav">
              <img src={reactLogo} className="nav-logo" alt="React logo" />
              <h3 className="nav-title">React course</h3>
              <h4 className="nav-link"><a href="http://www.julienlemee.com">Portfolio</a></h4>
            </nav>
        </header>
    )
}
