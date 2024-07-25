//WAP TO COUNT THE DIGITS IN A NUMBER
//  FOR eg 65809034  has digits equal to => 6

const prompt = require("prompt-sync")();

let n = prompt("Enter a number: ");

let nod = 0;
while(Math.floor(n) > 0) {
    n  = n / 10;
    nod++;
}

console.log(nod);