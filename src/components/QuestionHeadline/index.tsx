import React from "react";
import styles from "./styles.module.scss";
import utilityStyles from "../../global-styles/utilities.module.scss";
interface QuestionHeadlineProps {
    text:string
}

const QuestionHeadline = ({text}:QuestionHeadlineProps) => <h2 className={`${styles.question} ${utilityStyles.headline}`}>{text}</h2>



export default QuestionHeadline