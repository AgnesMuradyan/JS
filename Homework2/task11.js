/*
 * Merge two arrays and removes all duplicates elements.
 * @param {array} a1
 * @param {array} a2
 */

function merge(a1, a2) {
    return new Set(a1.concat(a2.filter((item) => !a1.includes(item))));
}

a1 = [15, 1,2,3,4,5,6,7];
a2 = [2,4,1,7,9,10,11,2];


console.log(merge(a1, a2));
