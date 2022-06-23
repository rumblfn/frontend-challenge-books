import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { searchCategoryType } from "../../types/header";
import styles from './style.module.scss'

const categoriesTypes: searchCategoryType[] = [
    'all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'
]

interface SwitcherSelectProps {
    heading: string;
    defaultValue: searchCategoryType;
}

export const CategorySelect:FC<SwitcherSelectProps> = ({heading, defaultValue}) => {
    const selectOptions = categoriesTypes

    const {setCategoryField} = useActions()

    return (
        <div className={styles['select-box']}>
            <h4 className={styles.heading}>{heading}</h4>
            <select 
                name="selectField" 
                className={styles.select}
                onChange={(e) => setCategoryField(e.target.value)}
                defaultValue={defaultValue}
            >
                {selectOptions.map((textOption: searchCategoryType, index: number) => 
                    <option 
                        value={textOption}
                        key={`${heading}${index}`}
                    >
                        {textOption}
                    </option>
                )}
            </select>
        </div>
    )
}