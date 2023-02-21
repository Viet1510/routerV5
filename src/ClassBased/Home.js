// how to create a class bases 
import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
               email: "" 
        }
        this.handleChange= this.handleChange.bind(this)
    }
    

    handleChange(e){
            this.setState( {
                    email: e.target.value
                } )
    }
    render(){
        return (
            <div style={{"margin":"150px"}}>
                <span>The Span Area{this.state.email}</span>
                <h1> Please Login </h1>
                <input id="email" type="text"  onChange={this.handleChange} ></input>                
                <button id='btnClickMe'>Click Me</button>
            </div>            
        )
    }
}
export { Login}