//Loop

//For Loop -> If you know how many times
// for (let i = 0; i <= 10; i++) {
//     console.log('R'+i)
// }

//While loop -> just know the condition 
// let ip = 0
// let house = 10
// while (ip != house) {
//     ip++
//     console.log("Step Taken" + '=' + ip)
// }

//Do While loop -> just know the condition
// let ip2 = 0
// let house2 = 10
// do {
//     ip2++
//     console.log("Step Taken" + '=' + ip2)
// } while (ip2 <= house);

//Guess the input -> Game - Application of DoWhile Loop
let number = 10
let guess = 0
do {
    guess = parseInt(prompt("Guess the number"))
    if (guess > number) {
        console.log("Too High")
    } else if (guess < number) {
        console.log("Too Low")
    }else{
        console.log("You Won")
    }
} while (guess != number);