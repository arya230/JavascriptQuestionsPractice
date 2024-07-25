// WAP IN JS TO FIND WHETHER A NUMBER IS A PRIME NUMBER OR NOT

const prompt = require("prompt-sync")();

const t = prompt("Enter the no of test cases: ")
console.log(t);
for(let i = 1; i <= t; i++) {
    const n = prompt("Enter the number: ");
    isPrime = true;
    for(let div = 2; div * div <= n; div++) {
        if(n % div == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime == true) {
        console.log("Prime Number");
    }
    else {
        console.log("Not a Prime Number");
    }
    
}








