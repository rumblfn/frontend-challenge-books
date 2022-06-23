import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import { searchCategoryType, searchSortingType, selectType, setterSelect } from "../../types/header";
import styles from './style.module.scss'

const categoriesTypes: searchCategoryType[] = [
    'all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'
]
const sortingTypes: searchSortingType[] = ["relevance", "newest"]

const getFields = (type: selectType): setterSelect[] => {
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
}

export const SwitcherSelect:FC<SwitcherSelectProps> = ({heading, type}) => {
    const selectOptions = getFields(type)

    const {setSortingField, setCategoryField} = useActions()

    return (
        <div className={styles['select-box']}>
            <h4 className={styles.heading}>{heading}</h4>
            <select name="selectField"
                className={styles.select}
                onChange={e => {
                    const value = e.target.value
                    if (sortingTypes.includes(value)) {
                        setSortingField(value)
                    }
                }}
            >
                {selectOptions.map((textOption: setterSelect, index: number) => 
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