import React from 'react';
import Footer from "../Footer"
import styles from "./styles.module.scss";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Start from "../../screens/Start"
import Question from '../../screens/Question';
import Results from '../../screens/Results';
import {ChoicesProvider} from "../../contexts/ChoicesContext"
function App() {

  return (
    <ChoicesProvider>
    <Router>
      
      <div className={styles.footerWrap}>
        <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Start/>} />
          <Route path="/question/" element={<Question />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        </div>
        
      </div>
      <Footer />
    </Router>
    </ChoicesProvider>
  );
}

export default App;
