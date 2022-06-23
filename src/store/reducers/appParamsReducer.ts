import { paramsActionReducer, ParamsActionTypesReducer, ParamsState } from "../../types/params"

const initialState: ParamsState = {
    inputField: '',
    searchSorting: 'relevance',
    searchCategory: 'all',
    searchIndex: 0
}

export const paramsReducer = (state = initialState, action: paramsActionReducer): ParamsState => {
    switch (action.type) {
        case ParamsActionTypesReducer.SET_INPUT_FIELD:
            return {
                ...state,
                inputField: action.payload
            }
        case ParamsActionTypesReducer.SET_SEARCH_CATEGORY:
            return {
                ...state,
                searchCategory: action.payload
            }
        case ParamsActionTypesReducer.SET_SEARCH_SORTING:
            return {
                ...state,
                searchSorting: action.payload
            }
        case ParamsActionTypesReducer.SET_SEARCH_INDEX:
            return {
                ...state,
                searchIndex: action.payload
            }
        default:
            return state
    }
}