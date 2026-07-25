// patterns
function homeWork1(n: number): void {
  for (let i = 0; i < n; i++) {
    let s: string = "";
    for (let j = 0; j < i; j++) s += "-";
    s += "*";
    console.log(s);
  }
}
homeWork1(5);
