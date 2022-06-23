import { FC } from "react";
import { Book } from "../../types/book";
import styles from './style.module.scss'

interface BookCardProps {
    book: Book
}

export const BookCard:FC<BookCardProps> = ({book}) => {
    const {categories, authors, title, imageLinks} = book.volumeInfo

    return (
        <div className={styles.card}>
            <div className={styles['img-box']}>
                {imageLinks ? 
                    <img className={styles.img}
                        src={imageLinks.smallThumbnail} 
                        alt="book-card" 
                    />
                    : <div className={styles.img}></div>
                }
            </div>
            <div className={styles['desc-block']}>
                <h4 className={styles.title}>{title ? title : null}</h4>
                <p className={styles.category}>{
                    categories ? 
                        categories[0] : null
                }</p>
                <p>{authors ? authors : null}</p>
            </div>
        </div>
    )
}