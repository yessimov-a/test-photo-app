import { SET_SEARCH_INPUT, SEARCH_FETCHING, SEARCH_SUCCESS, SEARCH_FAILURE } from '../constants'
import { addHistoryPhoto } from './historyActions'

export const setSearchInput = (payload) => ({
    type: SET_SEARCH_INPUT,
    payload
})

const searchSuccess = (payload) => ({
    type: SEARCH_SUCCESS,
    payload
})

const searchFailure = () => ({
    type: SEARCH_FAILURE
})

const searchFetching = () => ({
    type: SEARCH_FETCHING
})

export const searchPhoto = (search) => {
    return dispatch => {
        dispatch(searchFetching())
        fetch(`https://api.pexels.com/v1/search?query=${search}`, {
            headers: {
                "Authorization": "563492ad6f91700001000001cc129edd2e714c17a213459e7e675bf6"
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch(searchSuccess(data.photos))
                dispatch(addHistoryPhoto({
                    text: search,
                    id: new Date().getTime()
                }))
            })
            .catch(err => dispatch(searchFailure(err)))
    }
}