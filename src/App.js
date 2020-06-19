import React from 'react'
import { Header } from './components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './views/HomePage'
import { SearchPage } from './views/SearchPage'

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
            </Switch>
        </div>
    )
}

export {
    App
}