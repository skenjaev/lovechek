function areParenthesesBalanced(str: string): boolean {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") count++;
    if (str[i] === ")") count--;

    if (count < 0) return false; 
  }
  return count === 0;
}
console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda"))