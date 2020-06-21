import { ADD_HISTORY, REMOVE_HISTORY, HISTORY_SUCCESS, HISTORY_FAILURE, HISTORY_FETCHING } from "../constants";

export const addHistoryPhoto = (payload) => ({
    type: ADD_HISTORY,
    payload
})

export const removeHistoryPhoto = (payload) => ({
    type: REMOVE_HISTORY,
    payload
})

const historySuccess = (payload) => ({
    type: HISTORY_SUCCESS,
    payload
})

const historyFailure = () => ({
    type: HISTORY_FAILURE
})

const historyFetching = () => ({
    type: HISTORY_FETCHING
})

export const getHistory = (search) => {
    return dispatch => {
        dispatch(historyFetching())
        fetch(`https://api.pexels.com/v1/search?query=${search}`, {
            headers: {
                "Authorization": "563492ad6f91700001000001cc129edd2e714c17a213459e7e675bf6"
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(historySuccess(data.photos))

            })
            .catch(err => dispatch(historyFailure(err)))
    }
}