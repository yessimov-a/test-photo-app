import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchInput, searchPhoto } from '../../actions/searchActions'

import './SearchForm.scss'

const SearchForm = ({ isHomePage }) => {

    const searchInput = useSelector(state => state.search.searchInput)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setSearchInput(e.target.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchPhoto(searchInput))
        if (isHomePage) {
            history.push('/search')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input
                type="text"
                value={searchInput}
                onChange={handleChange}
                className="search-form__input"
                placeholder="Search photo"
            />
            <button
                className="search-form__submit"
                onClick={handleSubmit}
            >
            </button>
        </form>
    )
}

export {
    SearchForm
}