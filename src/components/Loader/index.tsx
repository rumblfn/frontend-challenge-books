import { FC } from "react";
import styles from './style.module.scss'

export const Loader:FC = () => {
    return (
        <div className={styles.book}>
            <div className={styles.inner}>
                <div className={styles.left}></div>
                <div className={styles.middle}></div>
                <div className={styles.right}></div>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}