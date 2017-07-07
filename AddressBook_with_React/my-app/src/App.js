import React, { Component } from 'react';
//import logo from './logo.svg';
//import ReactDOM from 'react-dom';
import './App.css';
import AddressBook from './AddressBook'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderAddressBook: false,
      list: []
    };
  }

  addContact() {
    return this.setState({
      renderAddressBook: true,
      list: (['lastName', 'name', 'address', 'email', 'postNumber', 'phone'].map(elem => {
        return document.getElementById(elem).value;
      }))
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Address Book</h1>
      <label>Enter your name: <input type='text' id='name' /><br /><br /></label>
      <label>Enter your last name: <input type='text' id='lastName' /><br /><br /></label>
      <label>Enter your address: <input type='text' id='address'/><br /><br /></label>
      <label>Enter your email: <input type='email' id='email' /><br /><br /></label>
      <label>Enter your POST: <input type='text' id='postNumber' /><br /><br /></label>
      <label>Enter your phone number: <input type='tel' id='phone' /><br /><br /></label>
      <button onClick={() => this.addContact()}>Add</button>
      {this.state.renderAddressBook ? <AddressBook contacts={this.state.list}></AddressBook> : null}
      </div>
    )
  }
}

export default App;