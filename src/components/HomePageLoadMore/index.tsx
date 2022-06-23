import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../Button";
import { Loader } from "../Loader";
import styles from './style.module.scss'

interface LoadMoreProps {
    index: number;
}

export const LoadMore:FC<LoadMoreProps> = ({index}) => {
    const {loading, error} = useTypedSelector(state => state.books)

    const {fetchBooks} = useActions()
    const handleNewBooks = () => {
        fetchBooks(index)
    }

    return (
        <div className={styles.bottom}>
            {
                loading ?
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                : error ? error
                : <Button padding='10px 15px'
                    text="Load more"
                    click={handleNewBooks}
                />
            }
        </div>
    )
}