import createGUID from './GUID';

class AddressBookItem {
    constructor(firstName, lastName, address, email, postalCode, phoneNumber) {
        this.id = createGUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.email = (AddressBookItem.emailValidation(email)) ? email : throwError`Email`;
        this.postalCode = (AddressBookItem.postalCodeValidation(postalCode)) ? postalCode : throwError`Postal code`;
        this.phoneNumber = (AddressBookItem.phoneNumberValidation(phoneNumber)) ? phoneNumber : throwError`Phone number`;
    }

    get getInfo() {
        return `Info about person with full name: ${this.firstName} ${this.lastName}: { ` +
        `Address: "${this.address}"  >>>  Email: "${this.email}"  >>>  ` +
        `POST: ${this.postalCode}  >>>  Phone: ${this.phoneNumber} }`;
    }

    static emailValidation(email) {
        return /^\w+@[A-Za-z]+(\.[a-z]+){1,2}$/.test(email);
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

export default AddressBookItem;
