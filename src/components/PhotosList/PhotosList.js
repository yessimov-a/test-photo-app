import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalData } from '../../actions/modalActions'

import './PhotosList.scss'
import { Link, useRouteMatch } from 'react-router-dom'

const PhotosList = ({ list }) => {
    return (
        <ul className="photos-list">
            {list.map((photoData, i) => (
                <ListItem photoData={photoData} key={i} />
            ))}
        </ul>
    )
}

const ListItem = ({ photoData }) => {

    const dispatch = useDispatch()
    const { url } = useRouteMatch()

    const handleClick = () => {
        dispatch(setModalData(photoData))
    }

    return (
        <li className="photos-list__item">
            <Link to={`${url}/photo/${photoData.id}`} onClick={handleClick}>
                <img src={photoData.src.landscape} className="photos-list__img"/>
            </Link>
        </li>
    )
}

export {
    PhotosList
}