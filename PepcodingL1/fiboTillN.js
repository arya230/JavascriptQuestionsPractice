// WAP IN JS TO PRINT ALL THE FIBONACCI NUMBERS TILL nth

const prompt = require("prompt-sync")();

const n = prompt("Enter the number: ");
let a = 0;
let b = 1;

for(let i = 1; i <= Math.floor(n); i++) {
    let c  = a + b;

    console.log(a);
    a = b;
    b = c;

}
