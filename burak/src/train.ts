function findDuplicates(arr: number[]): number[] {
  const getDouble: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const count = arr.filter(x => x === arr[i]).length;

    if (count >= 2 && !getDouble.includes(arr[i])) {
      getDouble.push(arr[i]);
    }
  }

  return getDouble;
}
console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); 
