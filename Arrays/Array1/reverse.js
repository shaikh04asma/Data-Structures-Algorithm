"use strict";
function reverseArray(arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        // Swap arr[l],arr[r]
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5, 6, 7]; //value of array
let rev = reverseArray(arr); //store reverse value of array in rev
console.log(rev); //printing reverse value
