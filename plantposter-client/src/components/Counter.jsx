import React, {Component} from "react";

class Counter extends Component{

    // constructor(){
    //     super()
        
    // }
    state = {
        word: "",
        count: 0
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    incrementCount = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.setState((state) => {
            return(
                {count: state.count + state.word.length}
            )
        })
        this.setState({ word: "" })
    }

    render(){
        return(
            <div>
            <form onSubmit={this.incrementCount}>
            <input name="word" type="text" value={this.state.word} onChange={(event) => this.handleOnChange(event)}/>
            <button type = "submit" >Click Me</button>
            <p> {this.state.count} </p>
            </form>
            </div>
        )
    }

}
export default (Counter);