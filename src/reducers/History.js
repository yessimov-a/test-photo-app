import { ADD_HISTORY, REMOVE_HISTORY, HISTORY_FETCHING, HISTORY_SUCCESS, HISTORY_FAILURE } from "../constants"

const initialState = {
    historyList: [],
    historyPhotos: [],
    historyFetching: false,
    historyFailure: false,
    historySuccess: false
}

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HISTORY:
            return {
                ...state,
                historyList: [...state.historyList, action.payload]
            }
        case REMOVE_HISTORY:
            return {
                ...state,
                historyList: state.historyList.filter(photo => photo.id !== action.payload),
                historyPhotos: []
            }
        case HISTORY_FETCHING:
            return {
                ...state,
                historyFetching: true,
                historyFailure: false,
                historySuccess: false
            };
        case HISTORY_SUCCESS:
            return {
                ...state,
                historyPhotos: action.payload,
                historyFetching: false,
                historyFailure: false,
                historySuccess: true
            };
        case HISTORY_FAILURE:
            return {
                ...state,
                historyFetching: false,
                historyFailure: true,
                historySuccess: false
            };
        default:
            return state
    }
}