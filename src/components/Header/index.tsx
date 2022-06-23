import { FC, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button } from "../Button";
import { DefaultInput } from "../DefaultInput";
import { SwitcherSelect } from "../SwitcherSelect";
import styles from './style.module.scss'

export const Header:FC = () => {
    const {inputField, searchCategory, searchIndex, searchSorting} = useTypedSelector(state => state.params);
    const {setSearchField} = useActions()

    const handleSearch = () => {
        console.log(inputField)
        console.log(searchCategory)
        console.log(searchSorting)
        console.log(searchIndex)
    }

    return (
        <header className={styles['header-bg']}>
            <div className={styles['header-box']}>
                <div className={styles['header-box_top']}>
                    <DefaultInput 
                        placeholder="Type subtitle here ..."  
                        setValue={setSearchField}
                    />
                    <Button 
                        text="Search"
                        click={handleSearch}
                    />
                </div>
                <div className={styles['header-box_bottom']}>
                    <SwitcherSelect 
                        heading="Categories" 
                        type="categories" 
                    />
                    <SwitcherSelect 
                        heading="Sorting by" 
                        type="sorting" 
                    />
                </div>
            </div>
        </header>
    )
}