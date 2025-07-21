import React from "react"

class CountAppClass extends React.Component{
    constructor(props){
        super(props)
        this.state={count:20} 
    }
    render(){
        return(
            <div>
                <h1> Count App</h1>
                <div>{this.state.count}</div>
                <button onClick={() =>this.setState({count:this.state.count+1}) }>+</button>
             <button onClick={() =>this.setState({count:this.state.count-1}) }>-</button>
<button onClick={() =>this.setState({count:40}) }>Reset</button>
            </div>
        )
            
    }
}
export default CountAppClass