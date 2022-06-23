import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import styles from './style.module.scss'

interface DefaultInputProps {
    placeholder: string;
    defaultValue: string;
}

export const DefaultInput:FC<DefaultInputProps> = ({ placeholder, defaultValue }) => {
    const {setSearchField} = useActions()

    return (
        <input type="text"
            onChange={e => setSearchField(e.target.value)}
            className={styles.input} 
            value={defaultValue}
            placeholder={placeholder}
        />
    )
}