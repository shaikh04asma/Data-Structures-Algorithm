"use strict";
function homeWork5(n) {
    for (let row = 1; row <= n; row++) {
        let s = "";
        // Find distance from middle
        let distance = Math.abs(Math.ceil(n / 2) - row);
        // Leading spaces
        let space = distance;
        // Width of current row: 1, 3, 5, 3, 1
        let width = n - 2 * distance;
        for (let i = 1; i <= space; i++) {
            s += " ";
        }
        // Print the row
        for (let col = 1; col <= width; col++) {
            if (col === 1 || col === width) {
                s += "*";
            }
            else {
                s += " ";
            }
        }
        console.log(s);
    }
}
homeWork5(5);
