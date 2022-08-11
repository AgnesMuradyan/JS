/*
 * Converts lines of the form "my-short-string" to "myShortString".
 * @param {string} str
 */
str = "agnes-the-great";

function camelize(str) {
    let i = 0;
    let strNew = "";
    while(str[i]){
        if(str[i] === "-"){
            strNew += str[i + 1].toUpperCase();
            i ++;
        }
        else
            strNew += str[i];
        i += 1;
    }
    return strNew;
}

console.log(camelize(str));