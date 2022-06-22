import { Book } from "./book";

export interface BooksState {
    totalItems: number;
    firstLoading: boolean;
    firstError: string;
    loading: boolean;
    error: string;
    books: Book[];
}

export enum BooksActionTypesReducer {
    FETCH_BOOKS_FIRST_LOADING = "FETCH_BOOKS_FIRST_LOADING",
    FETCH_BOOKS_FIRST_ERROR = "FETCH_BOOKS_FIRST_ERROR",
    FETCH_BOOKS_LOADING = "FETCH_BOOKS_LOADING",
    FETCH_BOOKS_ERROR = "FETCH_BOOKS_ERROR",
    FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS",
    FETCH_BOOKS_FIRST_SUCCESS = "FETCH_BOOKS_FIRST_SUCCESS"
}

export interface FetchBooksActionFirstLoading {
    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_LOADING;
}

export interface FetchBooksActionFirstError {
    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_ERROR;
    payload: string;
}

export interface FetchBooksActionLoading {
    type: BooksActionTypesReducer.FETCH_BOOKS_LOADING;
}

export interface FetchBooksActionError {
    type: BooksActionTypesReducer.FETCH_BOOKS_ERROR;
    payload: string;
}

export interface FetchBooksActionSuccess {
    type: BooksActionTypesReducer.FETCH_BOOKS_SUCCESS;
    payload: {
        totalItems: number,
        items: Book[]
    };
}

export interface FetchBooksActionFirstSuccess {
    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_SUCCESS;
    payload: {
        totalItems: number,
        items: Book[]
    }
}

export type BooksActionReducer = 
    FetchBooksActionFirstLoading | 
    FetchBooksActionFirstError | 
    FetchBooksActionLoading |
    FetchBooksActionError | 
    FetchBooksActionSuccess |
    FetchBooksActionFirstSuccess;
