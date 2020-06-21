import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { SearchForm } from '../SearchForm/SearchForm'
import { PhotosList } from '../PhotosList/PhotosList'
import { Modal } from '../Modal/Modal'
import { Fetching } from '../Fetching/Fetching'
import { Failure } from '../Failure/Failure'

import './Search.scss'

const Search = () => {

    const { photos,
        searchSuccess,
        searchFailure,
        searchFetching
    } = useSelector(state => state.search)
    const { favoritesPhotos } = useSelector(state => state.favorites)
    const { path } = useRouteMatch()


    return (
        <div className="search-b">
            <SearchForm />
            <div className="search-b__list-wrapper">
                {searchFetching && <Fetching />}
                {searchSuccess && <PhotosList list={photos} />}
                {searchFailure && <Failure />}
            </div>
            <Switch>
                <Route exact path={`${path}/photo/:id`}>
                    <Modal path={path} data={favoritesPhotos} />
                </Route>
            </Switch>
        </div>
    )
}

export {
    Search
}