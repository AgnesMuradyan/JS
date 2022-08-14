/*
 * Combines two arrays
 */
function combine(arr1, arr2){
    let result = [];
    let i = 0 , j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

/*
 * Implements merge Sort
 */
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let middle = (arr.length / 2) | 0;
    return combine(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));
}

let arr = [78,39,0,23,13,57,3,47,24,97];
console.log(mergeSort(arr));