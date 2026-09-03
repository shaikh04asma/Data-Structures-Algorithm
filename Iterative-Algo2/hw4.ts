function homeWork4(n: number): void {
  //First half
  for (let row = 1; row <= Math.ceil(n / 2); row++) { // 1 <= 3
    let space = row - 1; // 1-1= 0
    let star = n - 2 * (row - 1); // 5-2*1-1= 5
    let s: string = "";
    //print space
    for (let i = 1; i <= space; i++) s += " "; // 1 <= 0
    for (let j = 1; j <= star; j++) s += "*"; //1 <= 5 
    console.log(s);
  }
  //second half
  for (let row = Math.floor(n / 2); row >= 1; row--) { //2 >= 1
    let s: string = "";
    let space = row - 1; // 2-1 =1
    let star = n - 2 * (row - 1);// 5-2*2-1= 3
    //print space
    for (let i = 1; i <= space; i++) s += " "; // 1<=1
    for (let j = 1; j <= star; j++) s += "*"; // 1 <= 3
    console.log(s);
  }
}
homeWork4(5);
