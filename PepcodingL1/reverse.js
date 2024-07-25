// WAP IN JS AND YOU HAVE TO DISPLAY THE DIGITS OF A NUMBER IN REVERSE

// FOR EG 65789658
// O/P
/*
8
5
6
9
8
7
5
6
*/

const prompt = require("prompt-sync")();

let num = prompt("Enter a number: ");

while(num > 0) {
    let ans = num % 10;

    console.log(ans);
    
    num = Math.floor(num / 10);
}
