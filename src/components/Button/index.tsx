import { FC } from "react";
import styles from './style.module.scss'

interface ButtonProps {
    text: string;
    click: () => void;
}

export const Button:FC<ButtonProps> = ({text = 'submit', click}) => {
    return (
        <div className={styles['button-box']}>
            <button onClick={() => click()}
                className={styles.button}
            >{text}
            </button>
        </div>
    )
}