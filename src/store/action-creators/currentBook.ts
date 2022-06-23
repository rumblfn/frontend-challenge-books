import { Dispatch } from 'redux';
import { Book, CurrentBookActionTypesReducer } from '../../types/book';

export const setCurrentBook = (book: Book) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: CurrentBookActionTypesReducer.SET_CURRENT_BOOK,
            payload: book
        })
    }
}
