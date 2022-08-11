/*
 * Checks whether an `input` is an array or not.
 * @param {object} esim
 */

let arr = [1,2,3,4,5,6];
let x = 5;
let str = "Agnes";

function isarray(esim){
    return Array.isArray(esim);
}

console.log(isarray(arr));
console.log(isarray(x));
console.log(isarray(str));