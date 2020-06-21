import React from 'react'
import { useSelector } from 'react-redux'
import { PhotosList } from '../PhotosList/PhotosList'

import './Favorites.scss'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Modal } from '../Modal/Modal'

const Favorites = () => {

    const { favoritesPhotos } = useSelector(state => state.favorites)
    const { path } = useRouteMatch()

    return (
        <div className="favorites-b">
            <h2 className="favorites-title">Favorites Photos</h2>
            <PhotosList list={favoritesPhotos} />
            <Switch>
                <Route exact path={`${path}/photo/:id`}>
                    <Modal path={path} data={favoritesPhotos} />
                </Route>
            </Switch>
        </div>
    )
}

export {
    Favorites
}