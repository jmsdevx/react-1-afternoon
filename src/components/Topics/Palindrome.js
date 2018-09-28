import React, {Component} from 'react'

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: "",
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignfilteredArray(val) {
            let reverse = val.split("").reverse().join("")
            if (val == reverse) {
              this.setState({palindrome: "True"})
            }
            else {this.setState({palindrome:"False"})
        }
    }




    render () {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>

                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>this.assignfilteredArray(this.state.userInput)}>Check</button>

                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;