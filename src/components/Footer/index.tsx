import React from "react"
import logo from "../../assets/logo.svg"
import utilities from "../../global-styles/utilities.module.scss";
import styles from "./styles.module.scss";
const Footer =  () => <footer className={styles.footer}>
    <div className={styles.poweredText} >Powered by <span className={utilities.srOnly}>Spoonflower</span></div>
    <img className={styles.logo} aria-hidden src={logo} alt="Spoonflower"/>
</footer>


export default Footer ; 