import React, { Component } from 'react';
import '../App.css';

import EditForm from './EditForm';

class ItemDetail extends Component {
    constructor(props) {
        super(props);
        this.state= {
            editMode: false,
        };
        this.changeEditMode = this.changeEditMode.bind(this);
    }

    changeEditMode() {
        this.setState({editMode: false});
    }

    render() {
        return (<div className="ItemDetail">{
            this.state.editMode ? 
                <EditForm edit={this.props.edit} changeEditMode={this.changeEditMode} idx={this.props.idx} prodName={this.props.prodName} amount={this.props.amount}/>
            :
            <div>
                <p>{this.props.prodName}</p>
                <p>{this.props.amount}</p>
                <button onClick={() => {
                    this.setState({editMode: true});
                }}>Edit</button>
                <button onClick={() => this.props.delete(this.props.idx)}>Delete</button>
            </div>
            }</div>);
    }
}




class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return this.props.items
        .map((item, idx) => {
            return (
                <ItemDetail key={idx} idx={idx} prodName={item.name} amount={item.amount} edit={this.props.edit} delete={this.props.delete} />
            )}
        )

    }
}

export default List;