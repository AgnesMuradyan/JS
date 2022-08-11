/*
 * Returns the first 'n' elements of the array.
 * @param {number} n
 * @param {array} arr
 */
function nthElement(n, arr){
    return arr.filter(el => arr.indexOf(el) <= n - 1);
}

arr = [1,2,3,4,5,6,7,8,9];
console.log(nthElement(4,arr));