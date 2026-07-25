"use strict";
// patterns
function homeWork1(n) {
    for (let i = 0; i < n; i++) {
        let s = "";
        for (let j = 0; j < i; j++)
            s += "-";
        s += "*";
        console.log(s);
    }
}
homeWork1(5);
