let arr: number[] = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];
function segregate0s1s(arr: number[]):number[] {
  let i = 0;
  let j = 0;
  let n = arr.length;
  while (i < n) {
    if (arr[i] == 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return arr;
}
let ans = segregate0s1s(arr);
console.log(ans);
