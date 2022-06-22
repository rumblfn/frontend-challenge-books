import axios from 'axios';
import { Dispatch } from 'redux';
import { Book } from '../../types/book';
import { BooksActionTypesReducer } from '../../types/books';
import { FetchingBooksAction } from '../../types/fetchingBooks';

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

export const fetchBooks = (search: string, startIndex: number, limit = 30) => {
    return async (dispatch: Dispatch<FetchingBooksAction>) => {
        try {
            dispatch({
                type: BooksActionTypesReducer.FETCH_BOOKS_LOADING
            })

            const response = await axios.get<responseBooksProps>(
                `https://www.googleapis.com/books/v1/volumes
                    ?q=${search}
                    &startIndex=${startIndex}
                    &maxResults=${limit}
                    &key=${process.env.REACT_APP_API_KEY}`
            )

            if (!response.data.error) {
                dispatch({
                    type: BooksActionTypesReducer.FETCH_BOOKS_SUCCESS, 
                    payload: {
                        totalItems: response.data.totalItems,
                        items: response.data.items
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