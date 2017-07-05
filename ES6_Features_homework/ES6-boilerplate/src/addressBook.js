class PersonalInfo {
    constructor(lastName, firstName, address, email, postalCode, phoneNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.email = (PersonalInfo.emailValidation(email) || throwError`Email`) ? email : '';
        this.postalCode = (PersonalInfo.postalCodeValidation(postalCode) || throwError`Postal code`) ? postalCode : '';
        this.phoneNumber = (PersonalInfo.phoneNumberValidation(phoneNumber) || throwError`Phone number`) ? phoneNumber : '';
    }

    get getInfo() {
        return `Info about person with full name: ${this.lastName} ${this.firstName}\n` + 
        `Address: ${this.address}\n` + `Email: ${this.email}\n` +
        `POST: ${this.postalCode}\n` + `Phone: ${this.phoneNumber}\n`;
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


class AddressBookItem {
    constructor(id, info) {
        this.id = id;
        this.info = info;
    }
}

class AddressBook {
    constructor(addressList = []) {
        addressList.every(e => e instanceof AddressBookItem) || throwError`addressList`;
        Reflect.defineProperty(this, 'addressList', {
            configurable: true,
            value: addressList
        });
        Reflect.setPrototypeOf(this.addressList, null);
    }

    pushNewPersonInfo(/*multiple Info*/) {
        Array.prototype.every.call(arguments, e => e instanceof PersonalInfo) || throwError`Personal Info`;
        Array.prototype.forEach.call(arguments, e => {
            let length = this.addressList.length;
            this.addressList.push(new AddressBookItem((length ? this.addressList[length - 1].id + 1 : 1), e));
        });
        return this.addressList.length;
    }

    findPersonInfoById(id) {
        let index = this.addressList.findIndex(e => e.id === id);
        return ~index ? this.addressList[index].info.getInfo : throwError`ID`;
    }

    deletePersonInfo(id) {
        let index = this.addressList.findIndex(e => e.id === id);
        return ~index ? this.addressList.splice(index, 1)[0].info.getInfo : throwError`ID`;
    }
}

const throwError = (str = 'parameter') => {
    throw `Your ${str} is not valid.`;
}

export {AddressBook, PersonalInfo};
