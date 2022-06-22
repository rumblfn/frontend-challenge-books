import { FC, useState } from "react";
import { Button } from "../Button";
import { DefaultInput } from "../DefaultInput";
import { SwitcherSelect } from "../SwitcherSelect";
import styles from './style.module.scss'

export const Header:FC = () => {
    const [searchSubText, setSearchSubText] = useState<string>('');
    const [searchCategory, setSearchCategory] = useState<string>('all');
    const [sortingType, setSortingType] = useState<string>('relevance');

    const handleSearch = () => {
        console.log(searchSubText)
        console.log(searchCategory)
        console.log(sortingType)
    }

    return (
        <header className={styles['header-bg']}>
            <div className={styles['header-box']}>
                <div className={styles['header-box_top']}>
                    <DefaultInput 
                        placeholder="Type subtitle here ..."  
                        setValue={setSearchSubText}
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
                        setValue={setSearchCategory}
                    />
                    <SwitcherSelect 
                        setValue={setSortingType}
                        heading="Sorting by" 
                        type="sorting" 
                    />
                </div>
            </div>
        </header>
    )
}