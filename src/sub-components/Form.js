import React, { Component } from 'react';
import '../App.css';

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
        this.setState({prodName: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.add(e.target.value)
    }

    render() {
        return (
            <div className="Form">
            <h2>Add a Product</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Product Name</label>
                <input type="text" name="prodName" value="" onChange={this.handleChange}></input>
                <input type="submit" value="Add"></input>
            </form>
            </div>
        );
    }
}

export default Form;