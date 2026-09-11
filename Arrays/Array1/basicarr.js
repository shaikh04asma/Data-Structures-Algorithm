"use strict";
let arr = [10, 20, 30, 40, 50, 60];
let fruits = ["Apple", "Banana", "Orange", "Watermelon"];
fruits.push("Mango"); //Add at end of array
console.log(fruits[fruits.length - 1]);
fruits.pop();
console.log(fruits[fruits.length - 1]);
fruits.shift();
console.log(fruits[0]); //Banana
fruits.unshift("Graphs");
console.log(fruits[0]); //graphs
arr[2] = 100;
console.log(arr);
