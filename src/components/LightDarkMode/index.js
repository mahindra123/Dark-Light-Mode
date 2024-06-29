import { Component } from "react";
import './index.css'
class LightDarkMode extends Component{

    state = {isClicked: true}

    onChangeMode = () =>{
        const {isClicked} = this.state
        this.setState(prevState => ({isClicked : ! isClicked}))
    }

    



    render(){
        const {isClicked} = this.state
        const className = isClicked ? 'dark-mode' : 'light-mode'
        const nameText = isClicked ? 'Light Mode' : 'Dark Mode'
        return(
            <div className={`container ${className}`}>
                <h1 className="">Click to change the mode</h1>
                <button type="button" onClick={this.onChangeMode}>{nameText}</button>
            </div>
        )
    }
}
export default LightDarkMode