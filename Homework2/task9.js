/*
 * Returns a new array of the same number of elements, in which at each position there must be a sum of
 * elements arr to this position inclusive.
 * @param {array} arr
 */

let arr = [1,2,3,4,5,6,7,8,9];

function esim (arr) {
    let newArr = [];
    let sum = 0;
    for(let elem of arr){
        sum += elem;
        newArr.push(sum);
    }
    return newArr;
}

console.log(esim(arr));