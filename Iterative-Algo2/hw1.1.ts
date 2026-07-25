function homeWork1_1(n: number): void {
  let star: number = 1;
  let space: number = 0; 
  for (let i = 1; i <= n; i++) {
    let s: string = "";
    for (let j = 1; j <= space; j++) s += " "; //space= 0 false
    for (let j = 1; j <= star; j++) s += "*"; //star = 1 true
    console.log(s); //only star *
    // increase space for next row
    space++; //space=1
  }
}
homeWork1_1(7)
