import { searchCategoryType, searchSortingType } from './../../types/header';
import { ParamsActionTypesReducer } from './../../types/params';
import { Dispatch } from 'redux';

export const setSearchField = (text: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ParamsActionTypesReducer.SET_INPUT_FIELD,
            payload: text
        })
    }
}

export const setSortingField = (text: searchSortingType) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ParamsActionTypesReducer.SET_SEARCH_SORTING,
            payload: text
        })
    }
}

export const setCategoryField = (text: searchCategoryType) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ParamsActionTypesReducer.SET_SEARCH_CATEGORY,
            payload: text
        })
    }
}

export const setBooksIndex = (index: number) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: ParamsActionTypesReducer.SET_SEARCH_INDEX,
            payload: index
        })
    }
}