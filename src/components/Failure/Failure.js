import React from 'react'
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Failure.scss'

const Failure = ({color = '#fff'}) => {
    return (
        <div className="failure">
            <h2 className="failure__text" style={{color}}>
                {`Ooopps, something is going wrong `} 
                <FontAwesomeIcon icon={faFrown} />
            </h2>
        </div>
    )
}

export {
    Failure
}