// if else statement
const age = 22
if(age >= 18){
    console.log("You can vote")
}else{
    console.log("You can't vote")
}

//Ternary Operator
let result = age >= 18 ? 'Yes' : 'No'
console.log(result)

const option = 5
switch(option){
    case 1:
        console.log("You selected option 1")
        break
    case 2:
        console.log("You selected option 2")
        break
    default:
        console.log("Invalid option")
        break
}