// WAP TO FIND ALL THE PRIMES TILL N


const prompt = require("prompt-sync")();

const low = prompt("Enter a low value: ");

const high = prompt("Enter a high value: ");

for(let n = Math.floor(low); n <= Math.floor(high); n++) {
    isPrime  = true;
    for(let div = 2; div * div <= n; div++) {
        if(n % div == 0) {
            isPrime = false;
            break;
        }
    }
    if(isPrime == true) {
        console.log(n);

    }
    
}