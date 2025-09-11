function reduceNestedArray(myArr: any[]): number {
  let sum = 0;
  for (const val of myArr) {
    if (Array.isArray(val)) {
      sum += reduceNestedArray(val); 
    } else {
      sum += val; 
    }
  }
  return sum;
}

console.log(reduceNestedArray([1, [1, 2, [4]]])); 


// function delayHelloWorld(a: string): Promise<string> {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(a);
//       }, 3000)
//   });
// }

// delayHelloWorld("Hello World").then((result) => {
//   console.log(result)});