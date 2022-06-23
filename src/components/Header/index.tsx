import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../Button";
import { DefaultInput } from "../DefaultInput";
import { CategorySelect } from "../SwitcherSelect/category";
import { SortingSelect } from "../SwitcherSelect/sorting";
import styles from './style.module.scss'

export const Header:FC = () => {
    const {inputField, searchCategory, searchSorting} = useTypedSelector(state => state.params);
    const {fetchFirstBooks} = useActions()

    const handleSearch = () => {
        fetchFirstBooks(inputField, searchCategory, searchSorting)
    }

    return (
        <header className={styles['header-bg']}>
            <div className={styles['header-box']}>
                <div className={styles['header-box_top']}>
                    <DefaultInput 
                        defaultValue={inputField}
                        placeholder="Type subtitle here ..." 
                    />
                    <Button 
                        text="Search"
                        click={handleSearch}
                    />
                </div>
                <div className={styles['header-box_bottom']}>
                    <CategorySelect 
                        defaultValue={searchCategory}
                        heading="Categories"
                    />
                    <SortingSelect 
                        defaultValue={searchSorting}
                        heading="Sorting by"
                    />
                </div>
            </div>
        </header>
    )
}