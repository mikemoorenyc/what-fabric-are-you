import React, { useContext, useLayoutEffect, useState } from "react";
import ChoicesContext from "../../contexts/ChoicesContext";
import styles from "./styles.module.scss";

import Button from "../../components/Button"
import QuestionHeadline from "../../components/QuestionHeadline";
import {Link} from "react-router-dom"
interface Item {
    slug:string, 
    designId: number, 
    thumbnail: string, 
    name:string, 
    tags: string[],
    user: {
        screenName: string
    }
}
const Results = () => {
    const {choices} = useContext(ChoicesContext);
    const [status,setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    /*const choices = [
        {
            option:"topic",
            value: "fall"
        },
        {
            option: "color",
            value: "black"
        },
        {
            option: "style",
            value: "artistic"
        }
    ]*/
    const queryMaker = () => {
        let queryArray: any[][] = []

        choices.forEach(e => {
            if(!queryArray.some(q => q[0] === e.option)) {
             queryArray =  [...queryArray, ...[[e.option, []] ]  ]
            }
            queryArray.map(q => {
                if(q[0] !== e.option) {
                    return q;
                }
                q[1] = [...q[1], ...[e.value]]
                return q;
            })

        })
        const theString = queryArray.map(e => {
            return `${e[0]}=${e[1].join(",")}`
        }).join("&")
       console.log(theString);
        return theString
    }
    const getItem = async (queryString:string) => {
        const response = await fetch("https://pythias.spoonflower.com/search/v1/designs?forSale=true&"+queryString);
        const items = await response.json(); 
        return items; 
    }
    const getMatch = async () => {
        setStatus("loading")
        const item = await getItem(`page_size=1&${queryMaker()}`)
        if(!item.page_results.length) {
            setStatus("error");
            return ;
        }
        
        setSelectedItem(item.page_results[0]);
        setStatus("success");
    }
    useLayoutEffect( ()=> {
        
        if( status === "idle" && choices.length ) {
            getMatch(); 
            
            return
        }
        
    },[choices,status,getMatch])
    const buyNowClick = (id:number) => {
        window.open(`https://www.spoonflower.com/en/fabric/${id}`,"_blank")
    }
   
    return <div className={styles.resultContainer}>
        <QuestionHeadline text={"This is your fabric! "} />
    
        {["idle","loading"].includes(status)?<div className={styles.ghost} aria-hidden role="presentation"/> : null}
        {status === "error"? <div className={styles.errorText}>
            <p>We couldn't find any fabric for you</p>
            <Link to={"/"}>Start Over</Link>
            </div>:null}
        {status === "success" && selectedItem !== null? <>
        <div className={styles.resultData}> 
            <a className={styles.swatchContainer} href={`https://www.spoonflower.com/en/fabric/${selectedItem.designId}`} target="_blank" rel="noreferrer"> 
                <img className={styles.swatch} src={`https://garden.spoonflower.com/c/${selectedItem.designId}/p/f/m/${selectedItem.thumbnail}`} alt={selectedItem.name}/>
            </a>
            <div className={styles.meta}>
                <h2 className={styles.name}>{selectedItem.name}</h2>
                <p className={styles.buttonContainer}>
                    <Button text={"Buy now on Spoonflower"} action={()=>{buyNowClick(selectedItem.designId)}} />
                </p>
                <p><Link to={"/"}>Start Over</Link></p>
            </div>
        </div>
            
        </>:
        null
        }
    </div>
}

export default Results ; 

//https://garden.spoonflower.com/c/11484029/p/f/m/LS1zJPi3CknGvS3JBMPeYF2kI3LjOL9RXrPXrVs0c-Gj73tJrJnT/Wild%20grasses%20.jpg