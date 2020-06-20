import React, { useEffect } from 'react'
import { SearchForm } from '../SearchForm/SearchForm'
import { useDispatch } from 'react-redux'
import { setSearchInput } from '../../actions/searchActions'

import './Home.scss'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSearchInput(''))
    }, [])

    return (
        <div className="home-b">
            <SearchForm isHomePage={true} />
        </div>
    )
}

export {
    Home
}