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