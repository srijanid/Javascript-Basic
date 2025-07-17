//console.log("This is hello from External Linking");

// Loosely typed language
// var has global & function scope
// var age = 22;
// console.log(age)
// age = "Twenty Two";
// console.log(age);

//camel casing
// console.log(marksOfA);//undefined
// var marksOfA = 90;//hoisting
// console.log(marksOfA);//output 90
// {
//     var a = 10;
// }

if(true){
    //let -> block scope
    let b = 20;
    console.log(b);//output 20
    b = 30; //let can be reassigned but cannot be re-declared
    
}
//console.log(b);// ReferenceError

//const -> block scope
const c = 30;
// cannot be reassigned and redeclared
console.log(c + 10);
