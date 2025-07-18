//Logical Operators
// AND -> all condition must be true (&&)

const age = 20;
const gender = "male";

if (age>=18 && gender == 'male') {
    console.log("You are adult male to vote");
} else {
    console.log("You are not adult male to vote");
}

//OR -> any one condition must be true (||)

const age1 = 20;
const gender1 = "female";
if (age1>=18 || gender1 == 'female') {
    console.log("You are adult female to vote");
} else {
    console.log("You are not adult female to vote");
}

//NOT -> it will reverse the condition (!)

const number = 5;
if(number % 2 !=0){
    console.log("Odd Number");
}else{
    console.log("Even Number");
}

