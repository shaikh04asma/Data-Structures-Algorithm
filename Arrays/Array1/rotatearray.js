"use strict";
function reverseArrayRange(arr, l, r) {
    while (l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
}
function rotateArray(arr, k) {
    let n = arr.length;
    reverseArrayRange(arr, n - k, n - 1);
    reverseArrayRange(arr, 0, n - k - 1);
    reverseArrayRange(arr, 0, n - 1);
}
let arr = [1, 2, 3, 4, 5, 6];
let k = 3;
rotateArray(arr, k);
console.log(arr, k);
