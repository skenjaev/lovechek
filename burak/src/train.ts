function reverseInteger(numb: number): number {
  return Number(numb.toString().split("").reverse().join(""));
}

console.log(reverseInteger(123456789));

