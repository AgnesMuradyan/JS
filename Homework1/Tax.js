/*
 * Prints with $
 */
function print (x) {
    console.log(x + "$");
}

/*
 * Adds tax to the total amount
 */
function taxFunc(){
    totalPrice = Math.round(((totalPrice += (taxrate * totalPrice)) + Number.EPSILON) * 100) / 100
    print(totalPrice);
}

/*
 * Calculates total price for phones and accessories
 */
function buyPhone() {
    while (totalPrice + phonePrice < spendingTreshold) {
        totalPrice += phonePrice;
        if (totalPrice + accessoryPrice <= spendingTreshold) {
            totalPrice += accessoryPrice;
        }
    }
}

/*
 * Checks if totalPrice is less then spendingTreshold
 */
function check() {
    buyPhone();
    taxFunc();
    if (totalPrice <= spendingTreshold)
        console.log("Can afford");
    else
        console.log("Can't afford")
}

var myBalance = 2000;
const taxrate = 0.1;
const phonePrice = 150;
const accessoryPrice = 10;
const spendingTreshold = 1750;
let totalPrice = 0;

check();
