function pattern4_1(n: number): void {
  let starCount: number = 1; //first line will start from 1
  let spaceCount: number = Math.floor(n / 2); //7/2 = 3.5 so 3 spaces
  for (let i = 1; i <= n; i++) {
    let s: string = "";
    for (let j = 1; j <= spaceCount; j++) s += " ";
    for (let j = 1; j <= starCount; j++) s += "*";
    console.log(s);
    // condition check for next line
    if (i < n / 2) {
      //first half add 2 in star, subract 1 in space if your not at line of half daimond means 3.5 = 4
      starCount += 2;
      spaceCount -= 1;
    } else {
      // in mid of daimond subract 2 in star add 1 in space
      starCount -= 2;
      spaceCount += 1;
    }
  }
}
pattern4_1(7);
