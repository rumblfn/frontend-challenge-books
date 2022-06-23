import { searchSortingType, searchCategoryType } from './../../types/header';
import axios from 'axios';
import { Dispatch } from 'redux';
import { Book } from '../../types/book';
import { BooksActionReducer, BooksActionTypesReducer } from '../../types/books';

interface ErrorProps {
    code: number;
    message: string;
}

export interface responseBooksProps {
    totalItems: number;
    kind?: string;
    items: Book[];
    error?: ErrorProps;
}

export const fetchBooks = (
    search: string, startIndex: number, 
    category: searchCategoryType = 'all', orderBy: searchSortingType = 'relevance', limit = 30
) => {
    return async (dispatch: Dispatch<BooksActionReducer>) => {
        try {
            dispatch({
                type: BooksActionTypesReducer.FETCH_BOOKS_LOADING
            })

            let url = 'https://www.googleapis.com/books/v1/volumes?q='
            if (search) {
                url += `+intitle:${search}`
            }
            if (category !== 'all') {
                url += `+subject:${category}`
            }
            url += `&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${limit}&key=${process.env.REACT_APP_API_KEY}`

            const response = await axios.get<responseBooksProps>(url)

            if (!response.data.error) {
                dispatch({
                    type: BooksActionTypesReducer.FETCH_BOOKS_SUCCESS, 
                    payload: {
                        totalItems: response.data.totalItems,
                        items: response.data.items || []
                    }
                })
            } else {
                dispatch({
                    type: BooksActionTypesReducer.FETCH_BOOKS_ERROR, 
                    payload: response.data.error.message
                })
            }

        } catch (e) {
            dispatch({
                type: BooksActionTypesReducer.FETCH_BOOKS_ERROR, 
                payload: 'some errors'
            })
        }
    }
}

export const fetchFirstBooks = (
    search: string, category: searchCategoryType = 'all', orderBy: searchSortingType = 'relevance', limit = 30
) => {
    return async (dispatch: Dispatch<BooksActionReducer>) => {
        try {
            dispatch({
                type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_LOADING
            })

            let url = 'https://www.googleapis.com/books/v1/volumes?q= '
            if (search) {
                url += `+intitle:${search}`
            }
            if (category !== 'all') {
                url += `+subject:${category}`
            }
            url += `&orderBy=${orderBy}&startIndex=${0}&maxResults=${limit}&key=${process.env.REACT_APP_API_KEY}`
            console.log(url)

            const response = await axios.get<responseBooksProps>(url)

            if (!response.data.error) {
                dispatch({
                    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_SUCCESS, 
                    payload: {
                        totalItems: response.data.totalItems,
                        items: response.data.items || []
                    }
                })
            } else {
                dispatch({
                    type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_ERROR, 
                    payload: response.data.error.message
                })
            }

        } catch (e) {
            let message = 'some errors'
            if (!search) {
                message = 'Ошибка: Вы ничего не ввели в поиск'
            }
            dispatch({
                type: BooksActionTypesReducer.FETCH_BOOKS_FIRST_ERROR, 
                payload: message
            })
        }
    }
}