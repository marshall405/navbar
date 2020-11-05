import React from 'react'
import PropTypes from 'prop-types'


const header = {
    margin: '0',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
const ul = {
    display: 'flex',
    listStyle: 'none'
}
const li = {
    margin: '0 10px',
}
function NavBar({ logo, links }) {
    return (
        <header style={header}>
            <h1 className="logo">{logo}</h1>
            <nav>
                <ul style={ul} className="nav-links">
                    {
                        links.map(link => {
                            return (
                                <li style={li}><a href={`/${link}`}> {link} </a></li>
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