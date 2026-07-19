"use strict";
// pattern with spaces
function pattern3(n) {
    //void becoz it does'nt return anything just print
    for (let i = n; i >= 1; i--) {
        // I want to know how many stars and spaces are there in this line
        let stars = i; //5
        let spaces = n - i; //5-5
        // printing star and space
        let s = ""; // nothing
        for (let j = 1; j <= spaces; j++)
            s += " "; //1 < 0 condition false
        for (let j = 1; j <= stars; j++)
            s += "*"; //1 < 5  condition true
        console.log(s); // five stars
    }
}
pattern3(5);
