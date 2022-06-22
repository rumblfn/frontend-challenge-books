import { BooksActionReducer, BooksActionTypesReducer, BooksState } from './../../types/books';

const initialState: BooksState = {
    totalItems: 0,
    firstLoading: false,
    firstError: '',
    loading: false,
    error: '',
    books: []
}

export const booksReducer = (state = initialState, action: BooksActionReducer): BooksState => {
    switch (action.type) {
        case BooksActionTypesReducer.FETCH_BOOKS_FIRST_LOADING:
            return {
                ...state,
                firstLoading: true,
                firstError: ''
            }
        case BooksActionTypesReducer.FETCH_BOOKS_FIRST_ERROR:
            return {
                ...state,
                firstLoading: false,
                firstError: action.payload
            }
        case BooksActionTypesReducer.FETCH_BOOKS_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case BooksActionTypesReducer.FETCH_BOOKS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case BooksActionTypesReducer.FETCH_BOOKS_FIRST_SUCCESS:
            return {
                ...state,
                firstLoading: false,
                firstError: '',
                totalItems: action.payload.totalItems,
                books: [...action.payload.items]
            }
        case BooksActionTypesReducer.FETCH_BOOKS_SUCCESS:
            return {
                totalItems: action.payload.totalItems,
                firstLoading: false,
                firstError: '',
                loading: false,
                error: '',
                books: [...state.books, ...action.payload.items]
            }
        default:
            return state
    }
}