import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from './style.module.scss'

export const TotalItems:FC = () => {
    const {totalItems, firstLoading, firstError} = useTypedSelector(state => state.books)

    return (
        <div className={styles.box}>
            <h5>{
                firstLoading ? 'Loading...' :
                    firstError ? firstError :
                        `Found ${totalItems} results`
            }</h5>
        </div>
    )
}