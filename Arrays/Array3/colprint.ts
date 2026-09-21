let arr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

for (let i = arr[0].length - 1; i >= 0; i--) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j][i]);
    
  }
}
