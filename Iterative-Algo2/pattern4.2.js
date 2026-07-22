"use strict";
function pattern(n) {
    // Find the middle row
    let mid = Math.floor(n / 2);
    // Loop through all rows
    for (let i = 0; i < n; i++) {
        let s = "";
        // Calculate spaces using the distance from the middle row
        let spaces = Math.abs(mid - i);
        // Remaining positions will be stars
        let stars = n - (2 * spaces);
        // Print spaces
        for (let j = 0; j < spaces; j++) {
            s += " ";
        }
        // Print stars
        for (let j = 0; j < stars; j++) {
            s += "*";
        }
        // Print the current row
        console.log(s);
    }
}
// Function call
pattern(7);
