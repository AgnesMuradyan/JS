/*
 * Splits a string and converts it into an array of words
 * @param {string} s
 */

let str = "Agnes The Great";

// method 1
function mySplit(str) {
    let arr = [];
    let i = 0, j = 0;
    while(str[i++]){
        if(str[i] === " " || i === str.length){
            arr.push(str.substring(j, i));
            j = i + 1;
        }
    }
    return arr;
}

//method 2
let mySplit2 = (string => string.split(' '));



console.log(mySplit2(str));