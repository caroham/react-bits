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
        return (<React.Fragment>{
            this.state.editMode ? 
                <EditForm edit={this.props.edit} changeEditMode={this.changeEditMode} idx={this.props.idx} prodName={this.props.prodName} amount={this.props.amount}/>
            :
            <tr>
                <td><p>{this.props.prodName}</p></td>
                <td><p>{this.props.amount}</p></td>
                <td><button onClick={() => {
                    this.setState({editMode: true});
                }}>Edit</button></td>
                <td><button onClick={() => this.props.delete(this.props.idx)}>Delete</button></td>
            </tr>
            }</React.Fragment>);
    }
}


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let items = this.props.items.map((item, idx) => {
            return (
                <ItemDetail key={idx} idx={idx} prodName={item.name} amount={item.amount} edit={this.props.edit} delete={this.props.delete} />
            )}
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )


    }
}

export default List;