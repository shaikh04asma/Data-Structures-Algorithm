"use strict";
// Bar Graph
// Function to calculate maximum element
function maxEle(arr) {
    let max = -Infinity;
    let idx = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            idx = i;
        }
    }
    // console.log(max, idx);
    return max;
}
maxEle([5, 2, 4, 1, 3, 2]);
// Print Bar Graph
function barGraph(arr) {
    let max = maxEle(arr); //5
    let n = arr.length; //6
    for (let floor = max; floor >= 1; floor--) { //5 >= 1
        let s = "";
        for (let i = 0; i < n; i++) { //1 < 6
            if (arr[i] >= floor) { // 5 >= 5 
                s += " *";
            }
            else {
                s += "  ";
            }
        }
        console.log(s); //* - - - - -
    }
}
barGraph([5, 2, 4, 1, 3, 2]);
