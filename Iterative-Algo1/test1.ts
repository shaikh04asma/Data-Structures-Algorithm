function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 5));
let sum: string | number = add(5, 10);
console.log(sum);
