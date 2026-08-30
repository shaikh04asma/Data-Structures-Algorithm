"use strict";
// Two diagonal pattern like X
function homeWork3(n) {
    for (let row = 1; row <= n; row++) {
        let s = "";
        for (let col = 1; col <= n; col++) {
            if (row === col || row + col === n + 1) {
                s += "*";
            }
            else {
                s += "-";
            }
        }
        console.log(s);
    }
}
homeWork3(5);
