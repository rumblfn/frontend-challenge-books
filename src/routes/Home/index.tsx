import { FC } from "react";
import { BookCard } from "../../components/BookCard";
import { LoadMore } from "../../components/HomePageLoadMore";
import { TotalItems } from "../../components/totalItems";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Book } from "../../types/book";
import styles from './style.module.scss'

export const HomePage:FC = () => {
    const {books} = useTypedSelector(state => state.books)
    const bookIds: string[] = []

    return (
        <div className={styles.page}>
            <TotalItems />
            <main className={styles['main-box']}>
                {books.map((book: Book) => {
                    if (!bookIds.includes(book.id)) {
                        bookIds.push(book.id)
                        return (
                            <div className={styles['card-box']} key={book.id}>
                                <BookCard book={book} />
                            </div>
                        )
                    }
                    return null
                })}
            </main>
            <LoadMore index={books.length} />
        </div>
    )
}