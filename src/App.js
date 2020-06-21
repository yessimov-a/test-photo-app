import React from 'react'
import { Header } from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { SearchPage } from './views/SearchPage'
import { FavoritesPage } from './views/FavoritesPage'

import './App.scss'
import { HistoryPage } from './views/HistoryPage'

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/favorites">
                    <FavoritesPage />
                </Route>
                <Route path="/history">
                    <HistoryPage />
                </Route>
            </Switch>
        </div>
    )
}

export {
    App
}