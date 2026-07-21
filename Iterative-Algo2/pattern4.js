"use strict";
function pattern4(n) {
    // n = 5
    for (let i = 1; i <= n; i++) {
        let starCount = i; //1
        let spacesCount = n - i; //5-1
        let s = "";
        for (let j = 1; j <= spacesCount; j++)
            s += "-";
        for (let j = 1; j <= starCount; j++)
            s += "*";
        console.log(s);
    }
    for (let k = n - 1; k >= 1; k--) {
        let star = k;
        let space = n - k;
        let s = "";
        for (let j = 1; j <= space; j++)
            s += "-";
        for (let j = 1; j <= star; j++)
            s += "*";
        console.log(s);
    }
}
pattern4(5);
