import React, { Component } from 'react';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
import './App.css';
import AddressBook from './AddressBook'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  render() {
    const renderList = [];
    return (
      <div className="App">
      <h1>Address Book</h1>
      <label>Enter your name: <input type='text' ref={input => renderList.push(input)}/><br /><br /></label>
      <label>Enter your last name: <input type='text' ref={input => renderList.push(input)}/><br /><br /></label>
      <label>Enter your address: <input type='text' ref={input => renderList.push(input)}/><br /><br /></label>
      <label>Enter your email: <input type='email' ref={input => renderList.push(input)}/><br /><br /></label>
      <label>Enter your POST: <input type='text' ref={input => renderList.push(input)}/><br /><br /></label>
      <label>Enter your phone number: <input type='tel' ref={input => renderList.push(input)}/><br /><br /></label>
      <button onClick={() => this.setState({list: renderList.map(e => e.value)})}>Add</button>
      <AddressBook contacts={this.state.list}></AddressBook>
      </div>
    )
  }
}

export default App;
