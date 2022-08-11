/*
 * Returns iobject's deep copy.
 * @param {object} obj
 */

function deepClone(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let elem in obj) {
        let value = obj[elem];
        if(typeof value === "object" && value) {
            result[elem] = deepClone(value);
        } else {
            result[elem] = value;
        }
    }
    return result;
}

let date1 = {
    day : 1,
    year : 2022,
    month : 9
}

let esim = {
    firstName: "Agnes",
    lastName : "Muradyan",
    age : 19,
    course : 2,
    color : "blue",
    date : date1,
    array : [1,2,3,4,5]
}

console.log(deepClone(esim));