import React, { Component } from 'react';
import createGUID from './GUID';
class AddressBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onDelete: false,
            addressList: []
        };
        this.totalContacts = this.state.addressList.length;
    }

    deleteContact(index) {
        this.state.addressList.splice(index, 1);
        this.setState({
            onDelete: true,
            addressList: this.state.addressList
        });
    }

    render() {
        return (
            <div>
            {!this.state.onDelete ? this.state.addressList = this.state.addressList.concat(
                <p> {new AddressBookItem(...this.props.contacts).getInfo} 
                <button onClick = {() => this.deleteContact(this.totalContacts)}>Delete</button></p>
            ) : this.state.addressList}
            </div>
        )
    }
}

class AddressBookItem {
    constructor(lastName, firstName, address, email, postalCode, phoneNumber) {
        this.id = createGUID();
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.email = (AddressBookItem.emailValidation(email)) ? email : throwError`Email`;
        this.postalCode = (AddressBookItem.postalCodeValidation(postalCode)) ? postalCode : throwError`Postal code`;
        this.phoneNumber = (AddressBookItem.phoneNumberValidation(phoneNumber)) ? phoneNumber : throwError`Phone number`;
    }

    get getInfo() {
        return `Info about person with full name: ${this.lastName} ${this.firstName}(` +
        `Address: ${this.address} >>> ` + `Email: ${this.email} >>> ` +
        `POST: ${this.postalCode} >>> ` + `Phone: ${this.phoneNumber})`;
    }

    static emailValidation(email) {
        return /^\w+@[A-Z\a-z]+(\.[a-z]+){1,2}$/.test(email);
    }

    static postalCodeValidation(postalCode) {
        return /^([0-9]{3,10})|([^\W_]]{6,8})$/.test(postalCode);
    }

    static phoneNumberValidation(phoneNumber) {
        return /^\+[0-9]{3}(-*[0-9]{2}){4}$/.test(phoneNumber);
    }
}

const throwError = (str = 'parameter') => {
    throw new Error(`Your ${str} is not valid.`);
}

export default AddressBook;
