import { searchSortingType, searchCategoryType } from './header';

export interface ParamsState {
    inputField: string;
    searchSorting: searchSortingType;
    searchCategory: searchCategoryType;
    searchIndex: number;
}

export enum ParamsActionTypesReducer {
    SET_INPUT_FIELD = 'SET_INPUT_FIELD',
    SET_SEARCH_SORTING = 'SET_SEARCH_SORTING',
    SET_SEARCH_CATEGORY = 'SET_SEARCH_CATEGORY',
    SET_SEARCH_INDEX = 'SET_SEARCH_INDEX'
}

export interface SetInpitFieldAction {
    type: ParamsActionTypesReducer.SET_INPUT_FIELD;
    payload: string;
}

export interface SetSearchSortingAction {
    type: ParamsActionTypesReducer.SET_SEARCH_SORTING;
    payload: searchSortingType;
}

export interface SetSearchCategoryAction {
    type: ParamsActionTypesReducer.SET_SEARCH_CATEGORY;
    payload: searchCategoryType;
}

export interface SetSearchIndexAction {
    type: ParamsActionTypesReducer.SET_SEARCH_INDEX;
    payload: number;
}

export type paramsActionReducer = 
    SetInpitFieldAction |
    SetSearchSortingAction |
    SetSearchCategoryAction |
    SetSearchIndexAction;