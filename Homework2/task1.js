/*
 * Clones an array.
 * @param {array} arr
 */

arr = [1,2,3,4,5,6,7];

function arrayClone(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let elem in obj) {
        let value = obj[elem];
        if(typeof value === "object" && value) {
            result[elem] = arrayClone(value);
        } else {
            result[elem] = value;
        }
    }
    return result;
}

console.log(arrayClone(arr));
