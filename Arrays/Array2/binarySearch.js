"use strict";
function binarySearch(arr, tar) {
    let n = arr.length;
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == tar) {
            return mid;
        }
        else if (arr[mid] < tar) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let tar = 8;
let idx = binarySearch(arr, tar);
console.log(idx);
