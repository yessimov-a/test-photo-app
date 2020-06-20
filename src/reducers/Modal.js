import { SET_MODAL_DATA } from "../constants"

const initialState = {
    modalData: {}
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MODAL_DATA:
            return {
                ...state,
                modalData: action.payload
            }
        default:
            return state
    }
}