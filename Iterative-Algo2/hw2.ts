function homeWork2(n: number): void {
  for (let i = n; i >= 1; i--) {
    let s: string = "";
    for (let j = 1; j < i; j++) {
      s += "-";
    }
    s += "*";
    console.log(s);
  }
}
homeWork2(4);
