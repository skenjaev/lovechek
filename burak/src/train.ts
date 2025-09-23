function rotateArray(myArr: number[], getIndex: number): number[] {
  const rotateIndex = getIndex % myArr.length;
  const changed = myArr.splice(-rotateIndex);
  return [...changed, ...myArr];
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3)); 
