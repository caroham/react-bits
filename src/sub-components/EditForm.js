import React, { Component } from 'react';
import '../App.css';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodName:"",
            amount:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.edit()
    }

    render() {
        return (
            <div className="EditForm">
            <h2>Edit a Product</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Product Name</label>
                <input type="text" name="prodName" value="" onChange={this.handleChange}></input>
                <label>Amount</label>
                <input type="number" name="amount" onChange={this.handleChange}></input>
                <input type="submit" value="Edit"></input>
            </form>
            </div>
        );
    }
}

export default EditForm;