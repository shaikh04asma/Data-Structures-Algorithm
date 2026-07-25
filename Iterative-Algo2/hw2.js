"use strict";
function homeWork2(n) {
    for (let i = n; i >= 1; i--) {
        let s = "";
        for (let j = 1; j < i; j++) {
            s += "-";
        }
        s += "*";
        console.log(s);
    }
}
homeWork2(4);
