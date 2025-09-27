function countNumberAndLetters(input: string): { number: number; letter: number } {
  let numbers = 0;
  let letters = 0;

  for (const item of input) {
      if (item >= '0' && item <= '9') {
          numbers++;
      } else if ((item >= 'a' && item <= 'z') || (item >= 'A' && item <= 'Z')) {
          letters++;
      }
  }

  return { number: numbers, letter: letters };
}

console.log(countNumberAndLetters("string152%\\¥"));

