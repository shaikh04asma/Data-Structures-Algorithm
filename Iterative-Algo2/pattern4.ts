function pattern4(n: number): void {
  // n = 5
  for (let i = 1; i <= n; i++) {
    let starCount: number = i; //1
    let spacesCount: number = n - i; //5-1
    let s: string = "";
    for (let j = 1; j <= spacesCount; j++) s += "-";
    for (let j = 1; j <= starCount; j++) s += "*";
  
    console.log(s);
  }
  for (let k = n - 1; k >= 1; k--) {
    let star: number = k;
    let space: number = n - k;
    let s: string = "";
    for (let j = 1; j <= space; j++) s += "-";
    for (let j = 1; j <= star; j++) s += "*";
    
    console.log(s);
  }
}
pattern4(5);
