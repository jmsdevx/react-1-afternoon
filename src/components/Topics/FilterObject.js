import React, {Component} from 'react'

class FilterObject extends Component {

    constructor(){
        super();
        this.state = {
            unFilteredArray : [
                {name: 'bob', age: 25}, 
            {name: 'bill', eyes: 'brown'}, 
            {name: 'ron', hair: 'black'}
        ],
            userInput : "",
            filteredArray : [],
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    assignfilteredArray(val) {
        let filtered = this.state.unFilteredArray.filter(function(c,i,a){
            if (a[i].hasOwnProperty(val)){
              return a[i]
            }

          })
        this.setState({filteredArray : filtered})
    }





    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className="puzzleText">Unfiltered Array: {JSON.stringify(this.state.unFilteredArray)}</span>

                <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>this.assignfilteredArray(this.state.userInput)}>Filter</button>

                <span className="resultsBox filterObjectRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
}

export default FilterObject