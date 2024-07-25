//WAP TO PRINT THE DIGITS OF THE GIVEN NUMBER LINEWISE
//FOR EG GIVEN A NO LIKE
// INPUT => 65985123
//OUTPUT SHOULD BE
/*
6
5
9
8
5
1
2
3
*/


// solution will be 

const prompt = require("prompt-sync")();

let n = prompt("Enter a number whose digits you want to print linewise: ");

//first let us take out the no of the digits in this number
let nod = 0;
let temp = Math.floor(n);
console.log(temp);
while(temp > 0) {
    temp = Math.floor(temp / 10);
    nod++;
}
console.log(nod);


let div = Math.pow(10, nod - 1);
console.log(div);
while(div > 0) {
    let ans = Math.floor(n / div);
    console.log(ans);
    n = n % div;
    div = Math.floor(div / 10);
    



}



