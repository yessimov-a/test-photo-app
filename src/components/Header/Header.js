import React from 'react'
import { NavLink } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className="header__link">
                Home
            </NavLink>
            <NavLink to="/search" activeStyle={{ backgroundColor: '#313843' }} className="header__link">
                Search
            </NavLink>
        </div>
    )
}

export {
    Header
}