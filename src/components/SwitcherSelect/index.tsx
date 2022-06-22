import { FC } from "react";
import { selectType } from "../../types/header";
import styles from './style.module.scss'

const categoriesTypes = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
const sortingTypes = ["relevance", "newest"]

const getFields = (type: selectType) => {
    switch (type) {
        case "categories":
            return categoriesTypes;
        case "sorting":
            return sortingTypes
    }
}

interface SwitcherSelectProps {
    heading: string;
    type: selectType;
    setValue: (value: string) => void;
}

export const SwitcherSelect:FC<SwitcherSelectProps> = ({heading, type, setValue}) => {
    const selectOptions = getFields(type)

    return (
        <div className={styles['select-box']}>
            <h4 className={styles.heading}>{heading}</h4>
            <select name="selectField"
                className={styles.select}
                onChange={e => setValue(e.target.value)}
            >
                {selectOptions.map((textOption: string, index: number) => 
                    <option 
                        key={`${heading}${index}`}
                        value={textOption}
                    >
                        {textOption}
                    </option>
                )}
            </select>
        </div>
    )
}