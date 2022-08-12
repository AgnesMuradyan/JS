/*
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns {number} the highest number
 */

function maxnum(a,b,c){
    if(a < b || a < c)
        return b > c ? b : c;
    return a;
}

/*
 * @param {number} radius
 * @returns {number} surface
 */
function surface(radius){
    return Math.PI * radius * radius;
}

/*
 * @param {number} num
 * @returns {number} decimal part of num
 */

function getDecimal(num){
    //return parseInt(num);
    return num | 0;
    // return Math.floor(num);
}

/*
 * @param {number} n
 * @returns {number} n-th fibonacci number
 */
function  fib1(n){
    if(n === 1) return 0;
    if(n <= 2) return 1;
    return fib1(n - 1) + fib1(n - 2);
}

function fib2(n){
    let n1 = 0, n2 = 1;
    if(n === 1) return 0;
    for(let i = 3 ; i <= n ; ++i) {
        let temp = n2;
        n2 = n1 + n2;
        n1 = temp;
    }
    return n2;
}
/*
 * @param {number} min
 * @param {number} max
 * @returns {number} random integer between min and max
 */
function randomInteger(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*
 * @param {number} a
 * @param {number} b
 * @returns {number} calculates hypotenuse
 */
function pythagorean(a, b){
    return Math.sqrt(a * a + b * b)
}
