"use strict";
function floorSearch(arr, target) {
    let floor = -Infinity;
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target) {
            return arr[mid];
        }
        else if (arr[mid] < target) {
            l = mid + 1;
            floor = arr[mid];
        }
        else {
            r = mid - 1;
        }
    }
    return floor;
}
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let tar = 35;
let value = floorSearch(array, tar);
console.log(value);
