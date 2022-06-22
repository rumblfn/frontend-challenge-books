import { responseBooksProps } from "../store/action-creators/books";
import { BooksActionTypesReducer } from "./books";

export interface FetchBooksFirstLoadingAction {
    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_LOADING
}

export interface FetchBooksFirstErrorAction {
    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_ERROR;
    payload: string;
}

export interface FetchBooksSuccessAction {
    type: BooksActionTypesReducer.FETCH_BOOKS_SUCCESS;
    payload: responseBooksProps;
}

export interface FetchBooksLoadingAction {
    type: BooksActionTypesReducer.FETCH_BOOKS_LOADING
}

export interface FetchBooksErrorAction {
    type: BooksActionTypesReducer.FETCH_BOOKS_ERROR;
    payload: string;
}

export type FetchingBooksAction = 
    FetchBooksFirstLoadingAction | 
    FetchBooksFirstErrorAction |
    FetchBooksSuccessAction |
    FetchBooksLoadingAction |
    FetchBooksErrorAction;