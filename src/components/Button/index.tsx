import { FC } from "react";
import styles from './style.module.scss'

interface ButtonProps {
    text: string;
    click: () => void;
    padding?: string;
}

export const Button:FC<ButtonProps> = ({text = 'submit', click, padding}) => {
    return (
        <div className={styles['button-box']}>
            <button style={{padding: padding || '23px', height: padding ? 'fit-content' : '64px'}} onClick={() => click()}
                className={styles.button}
            >{text}
            </button>
        </div>
    )
}