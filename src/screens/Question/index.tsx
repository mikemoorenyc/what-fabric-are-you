import React , {useState, useContext} from "react"
import questions from "../../questions"
import {  useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import QuestionHeadline from "../../components/QuestionHeadline"
import ChoicesContext from "../../contexts/ChoicesContext"
import { ChoiceItem } from "../../contexts/ChoicesContext"
import styles from "./styles.module.scss";


const Question = () => {
    const {updateChoice} = useContext(ChoicesContext);
 
    const [choices, setChoices] = useState<ChoiceItem[]>([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const navigate = useNavigate();  
    
    const qSet = questions[currentQuestion];
    const [currentSelection,setSelection] = useState<number|undefined>(undefined);
    
    
    const makeSelection = (e:React.MouseEvent<HTMLButtonElement>,selectionId:number) => {
        e.preventDefault(); 
        setSelection(selectionId)
    }
    const nextQuestion = () => {
        if(currentSelection === undefined) {
            return false; 
        }
        let selectedChoice = qSet.choices[currentSelection]

        const updatePayload = [...choices, ...[{option:selectedChoice.option,value:selectedChoice.value }]  ]
        
        setChoices(updatePayload)
        setSelection(undefined);
       
        if(currentQuestion === questions.length - 1) {
            
            updateChoice(updatePayload);
            navigate("/results")
            return; 
        }
        setCurrentQuestion(currentQuestion+1);
        
        
    }
    
    return (
        <>
            
            <form> 
                <fieldset >
                    <QuestionHeadline as="legend" text={qSet.question} />
                    <div className={styles.choiceContainer}>
                        {qSet.choices.map((e,i) =>{
                            const key = `${currentQuestion},${i}
                            return <label for={key}>
                                <input 
                                    type="radio" 
                                    value={e.name} id={key} 
                                    name={`q-${currentQuestion}`} 
                                    className={srOnly} 
                                    onClic/>
                                <span className={styles.imgContainer}>
                                    <img aria-hidden key={e.img} className={styles.img} src={e.img} alt={e.name} />
                                </span>
                                <span className={styles.choiceTitle}>{e.name}</span>
                            </label>}}
                    </div>
                    
                </fieldset>
                <div className={styles.buttonContainer}>
                    <Button 
                        action={nextQuestion} 
                        text={(currentQuestion === questions.length - 1)? "See results" : "Next question"} 
                        disabled={currentSelection === undefined}
                        type="submit"/>
                </div>
                        
            </form>
        
            
        </>
    
    )
}
/*<button className={`${styles.choice} ${i === currentSelection? styles.selected:""}`} onClick={(e) => {makeSelection(e,i)}}   key={`${currentQuestion},${i}`}>
                        <span className={styles.imgContainer}><img key={e.img} className={styles.img} src={e.img} alt={e.name} /></span>
                        <span className={styles.choiceTitle}>{e.name}</span>
                    </button>*/

export default Question
