"use strict";
// pattern with spaces
function pattern3(n) {
    //void becoz it does'nt return anything just print
    for (let i = n; i >= 1; i--) {
        // I want to know how many stars and spaces are there in this line
        let starsCount = i; //2
        let spacesCount = n - i; //5-2 = 3
        // printing star and space
        let s = ""; // nothing
        for (let j = 1; j <= spacesCount; j++)
            s += "-"; //3 <= 3 condition false
        for (let j = 1; j <= starsCount; j++)
            s += "*"; // <= 3  condition true
        console.log(s); // five star 
    }
}
pattern3(5);
