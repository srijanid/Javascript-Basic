// Data Types

// Numbers

let num = 3.14;
let num2 = 3;
console.log(num / num2)
console.log(num + num2)


// Strings

let firstName = "Srijani";
const lastName = "Das";
//console.log(firstName + ' ' + lastName);

//Booleans 1(true) | 0 (false)
let isLoggedIn = false;
let isLoggedOut = true;
console.log(isLoggedIn + 10);//10
console.log(isLoggedOut + 10);//11

//NULL
let lastLogin = null;

//Objects
const person = {
    firstName: 'Srijani',
    lastName: 'Das',
    age: 23,
    isLoggedIn: true,
    lastLogin: null,
}
console.log(person);
console.log(person.firstName);
console.log(person['lastName']);
console.log(person.age);

//string '1' + '1' - string
//string + number = string
//string * number = number
//string / number = number
//string - number = number
//NaN - Not a Number

console.log('1' * 1)//1
console.log('a' + 1)// a1
console.log('1' + 1)//11

//typeof
console.log(typeof 1)//number
console.log(typeof '123')//string
console.log(typeof true)//boolean
console.log(typeof null)//object
console.log(typeof undefined)//undefined
console.log(typeof person)//object