function ceilSearch(arr: number[], tar: number): number {
  let ceil = -Infinity;
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == tar) {
      return arr[mid];
    } else if (arr[mid] < tar) {
      //4<5
      l = mid + 1;
    } else {
      //5>4
      r = mid - 1;
      ceil = arr[mid]; //bacha k rakh lia q yahi target ho sakta hai
    }
  }
  return ceil;
}
let arr = [10, 20, 30, 40, 50, 60, 70, 123, 245, 378, 500];
let tar = 35;
let idx = ceilSearch(arr, tar);
console.log(idx);
