import { FC } from "react";
import { useActions } from "../../hooks/useActions";
import styles from './style.module.scss'

interface DefaultInputProps {
    placeholder: string;
    defaultValue: string;
    enterPressed: () => void;
}

export const DefaultInput:FC<DefaultInputProps> = ({ placeholder, defaultValue, enterPressed }) => {
    const {setSearchField} = useActions()

    const handleKeyPresses = (e: {key: string}) => {
        if (e.key === 'Enter') {
            enterPressed()
        }
    }

    return (
        <input type="text"
            onKeyDown={handleKeyPresses}
            onChange={e => setSearchField(e.target.value)}
            className={styles.input} 
            value={defaultValue}
            placeholder={placeholder}
        />
    )
}