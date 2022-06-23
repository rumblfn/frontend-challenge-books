import { CurrentBookActionReducer, CurrentBookActionTypesReducer, CurrentBookState } from './../../types/book';

const initialState: CurrentBookState = {
    book: null
}

export const currentBookReducer = (
    state = initialState, action: CurrentBookActionReducer
): CurrentBookState => {
    switch (action.type) {
        case CurrentBookActionTypesReducer.SET_CURRENT_BOOK:
            return {
                book: action.payload
            }
        default:
            return state
    }
}