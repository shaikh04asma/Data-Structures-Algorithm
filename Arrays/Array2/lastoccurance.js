"use strict";
function lastOccurance(arr, target) {
    let occur = -Infinity;
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            occur = mid;
            l = mid + 1;
        }
        else if (arr[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return occur;
}
let arr = [1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 7, 7];
let tar = 3;
let idx = lastOccurance(arr, tar);
console.log(idx);
