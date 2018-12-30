import React, { Component } from 'react';
import '../App.css';
import "react-router";


import Form from './Form';
import List from './List';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
        };
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
      }
    
      addItem(name) {
        let items = this.state.items;
        console.log("in addItem, items: ", items, name);
        items.push({name: name, amount: 1});
        this.setState({items});
      }
    
      editItem(name, index, amount) {
        let items = this.state.items;
        items[index] = {name: name, amount: amount};
        this.setState({items});
      }
    
      deleteItem(index) {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({items});
      }
    
render() {
   return(
    <div className="Cart">
        <h1>{this.state.message}</h1>
        <List items={this.state.items} edit={this.editItem} delete={this.deleteItem}/>
        <Form add={this.addItem}/>
    </div>
  );
}

}

export default Cart;