"use strict";
function printer(arr, start, end) {
    let s = "";
    for (let i = start; i <= end; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}
function allSubarrays(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            printer(arr, i, j);
        }
    }
}
allSubarrays([10, 20, 30, 40]);
