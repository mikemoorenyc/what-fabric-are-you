import React from "react";
import styles from "./styles.module.scss";
import utilityStyles from "../../global-styles/utilities.module.scss";
interface QuestionHeadlineProps {
    text:string,
    as?:string
}

const QuestionHeadline = ({text}:QuestionHeadlineProps) => React.createElement(as || "h2",{className:`${styles.question} ${utilityStyles.headline}`}, text)



export default QuestionHeadline
    
    
