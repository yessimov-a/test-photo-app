import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header__link">
                Home
            </Link>
            <Link to="/search" className="header__link">
                Search
            </Link>
        </div>
    )
}

export {
    Header
}