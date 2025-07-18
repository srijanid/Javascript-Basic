//Function

function sayHello() {
    console.log("Hello World");
}

sayHello() //calling of function


function add(a,b) //arguments
{
    return (a+b);
}
let ad = add(5,2)//parameters

function mul(num1, num2) {
    return num1*num2;
}
let a = mul(5, 2)
console.log(a);

//create a function that can add as many numbers given 
//Unlimited Arguments result
function addNumbers() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

function addNumbers(...numbers) { //Spread Operator
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}
let addAll = addNumbers(1, 2, 3, 8, 9, 10)
console.log(addAll);