interface volumeInfoProps {
    title: string;
    authors: string[];
    description: string;
    categories: string[];
    imageLinks: {
        smallThumbnail: string;
        thumbnail: string;
    }
}

export interface Book {
    id: string;
    volumeInfo: volumeInfoProps;
}

export interface CurrentBookState {
    book: Book | null
}

export enum CurrentBookActionTypesReducer {
    SET_CURRENT_BOOK = 'SET_CURRENT_BOOK'
}

export interface SetCurrentBookAction {
    type: CurrentBookActionTypesReducer.SET_CURRENT_BOOK;
    payload: Book
}

export type CurrentBookActionReducer = SetCurrentBookAction;
