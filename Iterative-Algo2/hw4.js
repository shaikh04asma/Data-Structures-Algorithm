"use strict";
function homeWork4(n) {
    //First half
    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        let space = row - 1;
        let star = n - 2 * (row - 1);
        let s = "";
        //print space
        for (let i = 1; i <= space; i++)
            s += " ";
        for (let j = 1; j <= star; j++)
            s += "*";
        console.log(s);
    }
    //second half
    for (let row = Math.floor(n / 2); row >= 1; row--) {
        let s = "";
        let space = row - 1;
        let star = n - 2 * (row - 1);
        //print space
        for (let i = 1; i <= space; i++)
            s += " ";
        for (let j = 1; j <= star; j++)
            s += "*";
        console.log(s);
    }
}
homeWork4(5);
