import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header__link">
                Home
            </NavLink>
            <div className="header-links">
                <NavLink to="/search" activeStyle={{ backgroundColor: '#313843' }} className="header__link">
                    Search
            </NavLink>
                <NavLink to="/favorites" activeStyle={{ backgroundColor: '#313843' }} className="header__link">
                    Favorites
            </NavLink>
            </div>
        </div>
    )
}

export {
    Header
}