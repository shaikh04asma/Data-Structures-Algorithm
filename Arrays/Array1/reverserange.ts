//Reverse Array Range
function reverseArrayRange(arr: number[], l: number, r: number): number[] {
  while (l < r) {
    //swaping
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    l++;
    r--;
  }
  return arr;
}
let arr = [10, 20, 30, 40, 50, 60, 70, 80];
let rev = reverseArrayRange(arr, 3,6);
console.log(rev);

