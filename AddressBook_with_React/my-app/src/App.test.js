import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AddressBook from './AddressBook';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<AddressBook />, div);
});
