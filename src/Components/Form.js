import React, { Component } from 'react';
import '../App.css';
import "react-router";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodName:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        console.log("handling change: ", this.state.prodName);
        this.setState({prodName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("in submit: ", e.target.prodName.value);
        this.props.add(e.target.prodName.value);
        this.setState({prodName: ""});
    }

    render() {
        return (
            <div className="Form">
            <h2>Add a Product</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Product Name</label>
                <input type="text" name="prodName" value={this.state.prodName} onChange={this.handleChange}></input>
                <input type="submit" value="Add"></input>
            </form>
            </div>
        );
    }
}

export default Form;