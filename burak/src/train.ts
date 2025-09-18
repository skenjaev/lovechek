function squareDigits(num: number): string {
  let result = "";
  for (const everyNum of num.toString()) {
    const modifyEveryNum = Number(everyNum);     
    result += (modifyEveryNum * modifyEveryNum).toString();  
  }

  return result;
}

console.log(squareDigits(1234))