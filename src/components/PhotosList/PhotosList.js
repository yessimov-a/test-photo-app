import React from 'react'
import { useDispatch } from 'react-redux'
import { setModalData } from '../../actions/modalActions'

import './PhotosList.scss'
import { Link, useRouteMatch } from 'react-router-dom'

const PhotosList = ({ list }) => {
    return (
        <div>
            <ul>
                {list.map((photoData, i) => (
                    <ListItem photoData={photoData} key={i} />
                ))}
            </ul>
        </div>
    )
}

const ListItem = ({ photoData }) => {

    const dispatch = useDispatch()
    const { url } = useRouteMatch()

    const handleClick = () => {
        dispatch(setModalData(photoData))
    }

    return (
        <li>
            <Link to={`${url}/photo/${photoData.id}`} onClick={handleClick}>
                Photo
            </Link>
        </li>
    )
}

export {
    PhotosList
}