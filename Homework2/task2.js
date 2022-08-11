//Write a JavaScript program to compute the sum and product of an array of integers.

let sum = 0, prod = 1;
let arr = [1,2,3,4,5,6,7,8];

function sumProd(item){
    sum += item;
    prod *= item;
}

arr.forEach(sumProd);

console.log(`sum is ${sum} and prod is ${prod}`);
