"use strict";
let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
function sort012(arr) {
    let i = 0;
    let j = 0;
    let n = arr.length;
    let k = n - 1;
    while (i <= k) {
        if (arr[i] == 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j++;
        }
        else if (arr[i] == 1) {
            i++;
        }
        else if (arr[i] == 2) {
            let temp = arr[i];
            arr[i] = arr[k];
            arr[k] = temp;
            k--;
        }
    }
    return arr;
}
let ans = sort012(arr);
console.log(ans);
