import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor() {
        super();
        this.state = {
            evensArray : [],
            oddsArray : [],
            userInput : ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    assignEvenAndOdds(userInput) {
        let evens = []
        let odds = []

        
        let ints = userInput.split("").map(function (c,i,a){
         return parseInt(c,10)})
         
        for (let i=0;i<ints.length;i++){
          if (ints[i]%2 === 0) {
            evens.push(ints[i])
          }
          else {
            odds.push(ints[i])
          }

        }
        this.setState({ evensArray: evens, oddsArray: odds})
       
        
      }


    render() {
        return(
            <div className="puzzleBox evenAndOddPb">
                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>this.assignEvenAndOdds(this.state.userInput)}>Split</button>

                <span className="resultsBox">Evens: {JSON.stringify(this.state.evensArray)}</span>

                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddsArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd;