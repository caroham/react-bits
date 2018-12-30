import React, { Component } from 'react';
import '../App.css';
import "react-router";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "hi!",
        };
        this.changeMessage = this.changeMessage.bind(this);
    }

    changeMessage() {
        let message = (this.state.message === "hi!") ? "hello" : "hi!";
        this.setState({message});
      } 
    
    render() {
    return(
        <div className="Home">
            <h1>{this.state.message}</h1>
            <button onClick={this.changeMessage}>Click me!</button>
        </div>
    );
    }
}

export default Home;