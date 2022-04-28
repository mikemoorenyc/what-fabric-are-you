import React from "react";
import styles from "./styles.module.scss"
interface ButtonProps {
    text: string,
    action?: Function,
    disabled?:boolean,
    type? : string
}
const Button = ({type,text,action,disabled}:ButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        action(); 
    }

    return <button type={type||"button"} disabled={disabled} className={styles.button} onClick={action?handleClick||undefined}>{text}</button>
}

export default Button ; 
