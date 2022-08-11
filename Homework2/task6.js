/*
 * Returns the function name.
 */

function esimFunction() {
    console.log(arguments.callee.name);
}

esimFunction();