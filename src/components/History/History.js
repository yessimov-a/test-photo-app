import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { Fetching } from '../Fetching/Fetching'
import { PhotosList } from '../PhotosList/PhotosList'
import { Failure } from '../Failure/Failure'
import { getHistory, removeHistoryPhoto } from '../../actions/historyActions'
import { Modal } from '../Modal/Modal'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './History.scss'

const History = () => {
    const {
        historyList,
        historyPhotos,
        historySuccess,
        historyFetching,
        historyFailure
    } = useSelector(state => state.history)
    const { favoritesPhotos } = useSelector(state => state.favorites)
    const dispatch = useDispatch()
    const { path } = useRouteMatch()

    useEffect(() => {
        if (historyPhotos.length === 0 && historyList.length) {
            dispatch(getHistory(historyList[0].text))
        }
    }, [])

    const handleClick = (item) => {
        dispatch(getHistory(item.text))
    }

    const handleRemove = (e, item) => {
        e.stopPropagation()
        dispatch(removeHistoryPhoto(item.id))
    }

    return (
        <div className="history-b">
            <div className="history-sidebar">
                <ul className="history-list">
                    {historyList.map(item => (
                        <li className="history-list__item"
                            key={item.id}
                            onClick={() => handleClick(item)
                            }>
                            <p className="history-list__item_text" >{item.text}</p>
                            <button
                                className="history-list__item_remove"
                                onClick={(e) => handleRemove(e, item)}
                                value={item.id}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="history-content">
                {historyFetching && <Fetching />}
                {historySuccess && <PhotosList list={historyPhotos} />}
                {historyFailure && <Failure color={`#232a34`}/>}
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
    History
}