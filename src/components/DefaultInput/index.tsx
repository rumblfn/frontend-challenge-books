import { FC } from "react";
import styles from './style.module.scss'

interface DefaultInputProps {
    placeholder: string;
    setValue: (value: string) => void;
}

export const DefaultInput:FC<DefaultInputProps> = ({ placeholder, setValue }) => {
    return (
        <input type="text"
            onChange={e => setValue(e.target.value)}
            className={styles.input} 
            placeholder={placeholder}
        />
    )
}