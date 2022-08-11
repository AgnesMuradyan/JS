/*
 * Tests whether a date is a weekend.
 * @param {date} date
 */

//1 method
function isWeekend(date){
    return date.getDay() % 6 === 0;
}

//2 method
let isWeekend1 = (date => date.getDay() % 6 === 0);


let date1 = new Date('2022-08-07');