import React from "react";
import headerWords from "./headerWords";
import styles from "./styles.module.scss";
import utilityStyles from "../../global-styles/utilities.module.scss"
import Button from "../../components/Button"
import {useNavigate} from "react-router-dom"
interface HeaderWords {
    text: string,
    background: string
}

const Start = () => {
    const useBg = CSS.supports("-webkit-background-clip","text") || CSS.supports("background-clip: text") ;
    const navigate = useNavigate(); 
   
    return <>
        <h1 className={`${styles.h1} ${utilityStyles.headline}`}>
            {headerWords.map((e:HeaderWords,i) => <span className={styles.h1Word} key={i} style={
                (useBg)?{backgroundImage: `url(${e.background})`}:undefined}>{e.text} </span>)}
        </h1>
        <p className={styles.explanatoryText}>Answer a few question about yourself to find the fabric that matches your personality</p>
        <p className={styles.explanatoryText}><Button text={"Get started"} action={()=>{navigate("/question")}} /></p>
    </>
}


export default Start;