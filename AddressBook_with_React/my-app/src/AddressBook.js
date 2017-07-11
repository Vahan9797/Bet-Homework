import React, { Component } from 'react';
import AddressBookItem from './AddressBookItem';

class AddressBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressList: []
        };
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.contacts && nextProps.contacts.length;
    }

    componentWillReceiveProps(nextProps) {
        this.addContact(nextProps.contacts);
    }

    addContact(contactInfo) {
        this.setState({
            addressList: this.state.addressList.concat(new AddressBookItem(...contactInfo))
        });
    }

    deleteContact(index) {
        this.state.addressList.splice(index, 1);
        this.setState({
            addressList: this.state.addressList
        });
    }

    render() {
        return (
            <div>
            {this.state.addressList.map((elem, index) => {
                return ([
                    <p>{elem.getInfo}</p>,
                    <button onClick={() => this.deleteContact(index)}>Delete</button>
                ])
            })}
            </div>
        )
    }
}

export default AddressBook;
