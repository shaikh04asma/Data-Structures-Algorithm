"use strict";
function homeWork1_1(n) {
    let star = 1;
    let space = 0;
    for (let i = 1; i <= n; i++) {
        let s = "";
        for (let j = 1; j <= space; j++)
            s += " "; //space= 0 false
        for (let j = 1; j <= star; j++)
            s += "*"; //star = 1 true
        console.log(s); //only star *
        // increase space for next row
        space++; //space=1
    }
}
homeWork1_1(7);
