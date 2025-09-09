function delayHelloWorld(a: string): Promise<string> {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(a);
      }, 3000)
  });
}

delayHelloWorld("Hello World").then((result) => {
  console.log(result)});