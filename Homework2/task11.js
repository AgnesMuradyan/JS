/*
 * Merge two arrays and removes all duplicates elements.
 * @param {array} a1
 * @param {array} a2
 */

function merge(a1, a2) {
   const result = []
    for (let i = 0, j =0; i < a1.length, j < a2.length; i++, j++) {
        if (result.indexOf(a1[i]) === -1) result.push(a1[i]);
        if (result.indexOf(a2[j]) === -1) result.push(a2[j]);
    }
    return result;
}

a1 = [15, 1,2,3,4,5,6,7];
a2 = [2,4,1,7,9,10,11,2];


console.log(merge(a1, a2));
