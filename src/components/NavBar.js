import React from 'react'
import PropTypes from 'prop-types'

import '../styles/nav.css'

function NavBar({ logo, links }) {
    if(links.length === 0){
        links = ['about', 'contact', 'projects']
    }
    return (
        <header className="nav-container">
            <h1 className="logo">{logo}</h1>
            <nav>
                <ul className="nav-links">
                    {
                        links.map(link => {
                            return (
                                <li><a href={`/${link}`}> {link} </a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}

NavBar.propTypes = {
    links: PropTypes.array,
    logo: PropTypes.string.isRequired
}


export default NavBar;