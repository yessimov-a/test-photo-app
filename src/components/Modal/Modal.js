import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { faTimes, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Modal.scss'
import { useHistory } from 'react-router-dom';

const Modal = () => {

    const [isActive, setIsActive] = useState(false)
    const { modalData } = useSelector(state => state.modal)
    const history = useHistory()

    useEffect(() => {
        document.body.classList.add('modal-open')
        document.querySelector('.modal').addEventListener('click', handleCLoseModal)
        return () => {
            document.body.classList.remove('modal-open')
            document.querySelector('.modal').removeEventListener('click', handleCLoseModal)
        }
    }, [])

    const handleCLoseModal = useCallback(event => {
        const { className } = event.target
        if (className === 'modal') {
            closeModal()
        }
    })

    const closeModal = () => {
        history.replace(`/search`)
    }

    const handleLike = () => {
        setIsActive(prevState => !prevState)
    }

    return (
        <div className="modal">
            <div className="modal__container">
                <img src={modalData.src.landscape} className="modal__img" />
                <div className="modal-footer">
                    <h3 className="modal-footer__name">{modalData.photographer}</h3>
                    <button
                        style={isActive ? { color: '#dc3545', borderColor: '#dc3545' } : {}}
                        className="modal-footer__like"
                        onClick={handleLike}
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
            </div>
            <button
                className="modal__close"
                onClick={closeModal}
            >
                <FontAwesomeIcon icon={faTimes} />
            </button>
        </div>
    )
}

export {
    Modal
}