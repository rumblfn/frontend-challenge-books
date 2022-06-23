import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { searchSortingType } from "../../types/header";
import styles from './style.module.scss'


const sortingTypes: searchSortingType[] = ["relevance", "newest"]

interface SwitcherSelectProps {
    heading: string;
    defaultValue: searchSortingType;
}

export const SortingSelect:FC<SwitcherSelectProps> = ({heading, defaultValue}) => {
    const selectOptions = sortingTypes

    const {setSortingField} = useActions()

    return (
        <div className={styles['select-box']}>
            <h4 className={styles.heading}>{heading}</h4>
            <select name="selectField"
                className={styles.select}
                onChange={(e) => setSortingField(e.target.value)}
                defaultValue={defaultValue}
            >
                {selectOptions.map((textOption: searchSortingType, index: number) => 
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