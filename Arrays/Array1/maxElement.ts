function maxEle(arr: number[]) {
  
  let max: number = -Infinity;
  let idx: number = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      idx = i;
    }
  }
  console.log(`Maximum Element is: ${max}, and its Index is ${idx}  `);
}
maxEle([6, 3, 2, 4, 7, 6, 9, 3]);
