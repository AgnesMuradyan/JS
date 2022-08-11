/*
 * Implements reduce
 */

function reduce(array, myCallback, initialValue = 0){
    for(let elem of array){
        initialValue = myCallback(initialValue, elem);
    }
    return initialValue;
}
let array = [1,2,3,4,5,6,7];

console.log(reduce(array,function (sum, curr) {
    return sum + curr;
}));
