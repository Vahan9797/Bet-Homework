import {AddressBook, PersonalInfo} from './addressBook';

const sayHello = () => {
    /*eslint-disable no-console */
    console.log("Allo! We are all set!");
    console.log("Arrow functions are working");
};

window.personInfo = new PersonalInfo('Azganun', 'Anun', 'Tumanyan 19, Yerevan, Armenia', 'example@gmail.com', '0241', '+37493010203');
window.myAddressBook = new AddressBook();


sayHello();
