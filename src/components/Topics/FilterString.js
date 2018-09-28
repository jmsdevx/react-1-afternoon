import React, {Component} from 'react'

class FilterString extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray: ["hey", "there", "buddy", "hey", "ey", "bud", "the"],
            userInput : "",
            filteredArray: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignfilteredArray(val){
        let newArr = this.state.unFilteredArray.filter(function(c,i,a){
            if (c.includes(val)) {
              return c;
            }
        
          })

        this.setState({filteredArray: newArr})
        
    }





    render() {
        return (
            <div className="puzzleBox filterStringPB">

                <h4>Filter String</h4>

                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)} </span>

                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>this.assignfilteredArray(this.state.userInput)}>Filter</button>

                <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;