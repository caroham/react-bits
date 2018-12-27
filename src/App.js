import React, { Component } from 'react';
import './App.css';

import Form from './sub-components/Form';
import List from './sub-components/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hi!",
      items: [],
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.addItem = this.addItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  changeMessage() {
    let message = (this.state.message === "hi!") ? "hello" : "hi!";
    this.setState({message});
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
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click me!</button>
        <List items={this.state.items} edit={this.editItem} delete={this.deleteItem}/>
        <Form add={this.addItem}/>
      </div>
    );
  }
}

export default App;
