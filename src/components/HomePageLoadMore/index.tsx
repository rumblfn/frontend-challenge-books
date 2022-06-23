import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../Button";
import { Loader } from "../Loader";
import styles from './style.module.scss'

interface LoadMoreProps {
    index: number
}

export const LoadMore:FC<LoadMoreProps> = ({index}) => {
    const {inputField, searchCategory, searchSorting} = useTypedSelector(state => state.params)
    const {loading, error} = useTypedSelector(state => state.books)

    const {fetchBooks} = useActions()

    const handleNewBooks = () => {
        fetchBooks(inputField, index, searchCategory, searchSorting)
    }

    return (
        <div className={styles.bottom}>
            {
                loading ?
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                : error ? error
                : <Button 
                    text="Load more"
                    click={handleNewBooks}
                />
            }
        </div>
    )
}