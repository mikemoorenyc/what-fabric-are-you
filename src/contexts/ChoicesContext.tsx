import React, { ReactNode } from "react";
export interface ChoiceItem {
    option: string ,
       value: string 
}
interface ChoicesState {
    choices: ChoiceItem[],
    updateChoice: Function
}

const defaultState : ChoicesState = {
    choices: [],
    updateChoice: () => {}
}
const ChoicesContext = React.createContext(defaultState);

class ChoicesProvider extends React.Component<{children:ReactNode}> {
    state = {
        choices: []
    }
    updateChoice = (choices: ChoiceItem[]) => {
        
        this.setState( {choices: [...choices]})
    }
    clearChoices = () => {
        this.setState({color:[],topic:[],style:[]})
    }
    render() {
        return <ChoicesContext.Provider value={{...this.state,...{updateChoice:this.updateChoice}}}>
            {this.props.children}
        </ChoicesContext.Provider>
    }



}

export default ChoicesContext
export {ChoicesProvider}