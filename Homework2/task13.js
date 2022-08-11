/*
 * Implements equals
 */


function equals(obj1, obj2){
    if(obj1 === obj2) return true;

    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let key of Object.keys(obj1)){
        if(!Object.keys(obj2).includes(key)) return false;
        if(!equals(obj1[key], obj2[key])) return false;
    }
    return true;
}

let date1 = {
    day : 1,
    year : 2022,
    month : 9
}

let esim1 = {
    firstName: "Agnes",
    lastName : "Muradyan",
    age : 19,
    course : 2,
    color : "blue",
    date : date1,
    array : [1,2,3,4,5]
}

let esim2 = {
    firstName: "Agnes",
    lastName : "Muradyan",
    age : 19,
    course : 2,
    color : "blue",
    date : date1,
    array : [1,2,3,4,5]
}

console.log(equals(esim1, esim2));
