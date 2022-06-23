import { FC } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from './style.module.scss'

export const BookPage:FC = () => {
    const { book } = useTypedSelector(state => state.currentBook)
    if (!book) return null

    const {categories, authors, title, imageLinks, description} = book.volumeInfo

    return (
        <div className={styles.book}>
            <div className={styles['left-box']}>
                <img className={styles.img} src={imageLinks.thumbnail} alt="thumbnail"/>
            </div>
            <div className={styles['right-box']}>
                <p className={styles['category-box']}>
                    <span className={styles.cat}>Категории:</span> 
                    <span className={styles.category}>
                        {categories || 'категорий нет'}
                    </span>
                </p>
                <h3 className={styles.title}>{title || 'title'}</h3>
                <p className={styles.authors}>{`Авторы: ${authors}` || 'authors'}</p>
                <div className={styles['desc-box']}>
                    <b>Описание</b>
                    <p className={styles.desc}>
                        {description || 'description'}
                    </p>
                </div>
            </div>
        </div>
    )
}