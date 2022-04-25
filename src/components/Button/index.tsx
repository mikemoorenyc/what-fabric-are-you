import React from "react";
import styles from "./styles.module.scss"
interface ButtonProps {
    text: string,
    action: Function,
    disabled?:boolean
}
const Button = ({text,action,disabled}:ButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        action(); 
    }

    return <button disabled={disabled} className={styles.button} onClick={handleClick}>{text}</button>
}

export default Button ; 
