import React, {Component} from 'react'

class Sum extends Component {


    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    handleChange(val){
        this.setState({number1: val})
    }

    handleChangeTwo(val){
        this.setState({number2: val})
    }

    add(val1, val2) {
        let parse1 = parseInt(val1)
        let parse2 = parseInt(val2)
        let added = parse1 + parse2;
        this.setState({sum: added})

    }


    render(){
        return(
            <div className="puzzleBox sumPB">

                <h4>Sum</h4>

                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>

                <input className="inputLine" onChange={(e)=>this.handleChangeTwo(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>this.add(this.state.number1, this.state.number2)}>Add</button>

                <span className="resultsBox">Sum: {this.state.sum}</span>



            </div>
        )
    }
}

export default Sum