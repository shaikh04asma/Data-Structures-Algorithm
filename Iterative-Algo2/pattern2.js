"use strict";
function pattern2(n) {
    for (let i = n; i >= 1; i--) {
        let s = "";
        for (let j = 1; j <= i; j++) {
            s += "*";
        }
        console.log(s);
    }
}
pattern2(5);
