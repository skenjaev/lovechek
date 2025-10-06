// ////// G-TASK

// function getHighestIndex(arr:number[]) {
//  // Bo'sh array uchun
//     if (arr.length === 0) return -1; 

//  // Eng katta qiymatni topamiz
//     const maxValue = Math.max(...arr); 

//  // Eng katta qiymatning birinchi indexini qaytaramiz
//     return arr.indexOf(maxValue);  
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8])); 




// //////// H-TASK

// function getPositive(arr: number[]): string {
//    return arr
//        .filter(num => num > 0) // Musbat qiymatlarni olamiz
//        .map(num => num.toString()) // musbat qiymatni stringga aylantiramiz
//        .join(''); // Stringlarni birlashtiramiz
// }

// console.log(getPositive([-1, 99, -3, 8]));
// console.log(getPositive([19, 20, -3,])); 



////////// H2-TASK

// function getDigits(input: string): string {
//     // Raqamlarni ajratib olish uchun regex foydalanamiz
//     return input.replace(/\D/g, '');
// }

// console.log(getDigits("2q3w4e5r"));



// function majorityElement(arr: number[]): number {
//     const countMap: { [key: number]: number } = {}; // Elementlar sonini saqlash uchun obyekt

//     // Har bir elementni sanaymiz
//     for (let num of arr) {
//         countMap[num] = (countMap[num] || 0) + 1;
//     }

//     let majority: number = arr[0]; // Eng ko'p takrorlangan element
//     let maxCount: number = 0;      // Eng ko'p uchragan son

//     // Eng ko'p takrorlangan elementni topamiz
//     for (let num in countMap) {
//         if (countMap[num] > maxCount) {
//             maxCount = countMap[num];
//             majority = Number(num); // num - string turida, uni number ga o‘girlamoqdamiz
//         }
//     }

//     return majority;
// }

// // Misol:
// console.log(majorityElement([1, 2, 3, 7, 5, 7, 3, 7])); // return 4



// // J-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string): string {
  
//     let words: string[] = str.split(' ');
//     let longestWord: string = '';
//     for (let word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//    return longestWord;
//   }
//   console.log(findLongestWord("I come from Uzbekistan"));



// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string): number {
//   const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   let count: number = 0;

//   for (let i of str) {
//     if (vowels.includes(i)) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowels("Hello MIT"));





// L-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";


// function reverseSentence(sentence: string): string {
//   const words = sentence.split(" ");
//   const reversedWords = words.map(word => word.split("").reverse().join(""));
//   return reversedWords.join(" ");
// }

// console.log(reverseSentence("we like coding!"));






// M-TASK: 

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(numbers: number[]): { number: number, square: number }[] {
//   return numbers.map(num => ({
//       number: num,
//       square: num * num
//   }));
// }

// const result = getSquareNumbers([1, 2, 3]);
// console.log(result);





// N-TASK: 

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;


// function palindromCheck(str: string): boolean {

//   const reversed: string = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(palindromCheck("mom"));





// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum: number = 0;

//   arr.forEach(item => {
//     if (typeof item === 'number') {
//       sum += item;
//     }
//   });

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 10])); 








// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(obj: any) {
//   return Object.entries(obj);
// }

// console.log(objectToArray({ a: 10, b: 20 }));

  


// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: object, key: string): boolean {
//   return key in obj;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); 





// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(a:string): number {
//   const raqamlar = a.split("+").map(Number);
//   return raqamlar.reduce((b, c) => b + c, 0);
// } ;

// console.log(calculate("1+2+3+4+5"));



// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   const expectedSum = (n * (n + 1)) / 2;

//   const actualSum = nums.reduce((acc, num) => acc + num, 0);

//   return expectedSum - actualSum;
// }

// console.log(missingNumber([0, 1, 2, 3, 5]));




// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// }

// const result: number[] = mergeSortedArrays([111, 99, 5, -22], [5, 9, 90, -20]);
// console.log(result); 




// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;



// function sumOdds(number: number): number {
//   let count: number = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 !== 0) { // 2 ga bo‘linmasa
//       count++; 
//     }
//   }

//   return count;
// }

// console.log(sumOdds(3));





// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}


// function countChars(str: string): { [key: string]: number } {
//   const result: { [key: string]: number } = {};
  
//   for (let char of str) {
//     if (result[char]) {
//       result[char]++;
//     } else {
//       result[char] = 1;
//     }
//   }
  
//   return result;
// }

// console.log(countChars("assdddffff"));



// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr: any[], size: number): any[][] {
//   const result: any[][] = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));





// TASK X

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda


// function countOccurrences(obj: any, key: string): number {
//   let count = 0;

//   for (let k in obj) {
//     if (k === key) {
//       count++;
//     }

//     if (typeof obj[k] === 'object' && obj[k] !== null) {
//       count += countOccurrences(obj[k], key);
//     }
//   }

//   return count;
// }

// const obj1 = {
//   model: 'Tesla',
//   year: 2020,
//   owner: {
//     model: 'Bugatti',
//     color: 'blue'
//   }
// };

// console.log(countOccurrences(obj1, 'model')); 





// Y-TASK:

// Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
// MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]


// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   const set1 = new Set(arr1);
  
//   const intersection = arr2.filter(item => set1.has(item));
  
//   return intersection;
// }

// console.log(findIntersection([2, 4, 6, ],[5, 6, 7,]));






// Z-TASK:

// Shunday function yozing, u sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(numbers: number[]): number {
//   return numbers.reduce((sum, num) => {
//       if (num % 2 === 0) {
//           return sum + num;
//       }
//       return sum;
//   }, 0);
// }

// console.log(sumEvens([1, 8, 4, 6, 3])); 







// ZA-TASK:

// Shunday function yozing, u array ichidagi objectlarni “age” qiymati boyicha sortlab bersin. 
// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// type Person = { age: number };

// function sortByAge(arr: Person[]): Person[] {
//     return arr.sort((a, b) => a.age - b.age);
// }

// console.log(sortByAge([{ age: 12 }, { age: 34 }, { age: 45 }]));






// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomBetween(30, 50));




// TASK ZC

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.


// function celsiusToFahrenheit(celsius: number): number {
//     return (celsius * 9/5) + 32;
// }

// console.log(celsiusToFahrenheit(3));





// TASK ZD

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.


// function changeNumberInArray(index: number, arr: number[], newNumber: number): number[] {
//     if (index < 0 || index >= arr.length) {
//       return arr;
//     }
//     arr[index] = newNumber;
//     return arr;
//   }
//   console.log(changeNumberInArray(2, [1, 4, 6, 3], 6));
  





// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'


// function removeDuplicate(str: string): string {
//   let result = "";
//   for (let char of str) {
//       if (!result.includes(char)) {
//           result += char;
//       }
//   }
//   return result;
// }

// console.log(removeDuplicate('MMMMMIIIIIIITTTTTT1111166666')); 






// TASK ZG

// String sifatida berilgan string parametrni
// snake case'ga o'tkazib beradigan function yozing.

// MASALAN: convertToSnakeCase('name should be a string')
// return 'name_should_be_a_string'



// function convertToSnakeCase(str: string): string {
//   return str.toLowerCase().split(" ").join("_");
// }

// console.log(convertToSnakeCase("String sifatida berilgan string parametrni"));








// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin. 
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]


// function findDisappearedNumbers(numbers: number[]): number[] {
//    const minNumber = Math.min(...numbers);
//    const maxNumber = Math.max(...numbers);

//    const missingNumbers: number[] = [];

//    for ( let i = minNumber; i <= maxNumber; i++) {
//     if (!numbers.includes(i)) {
//       missingNumbers.push(i);
//     }
//    }

//    return missingNumbers;
// }

// console.log(findDisappearedNumbers([-4, -2, 0, 1, 3, 7]));






// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"


// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(message);
//       }, 3000);
//   });
// }

// delayHelloWorld("Hello World").then((result: string) => {
//   console.log(result);
// });






// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8


// function reduceNestedArray(arr: any[]): number {
//     let sum = 0;

//     for (const value of arr) {
//         if (typeof value === 'number') {
//             sum += value;
//         } else if (Array.isArray(value)) {
//             sum += reduceNestedArray(value);
//         }
//     }

//     return sum;
// }

// console.log(reduceNestedArray([1, [2, [3, 4], 5], 6]));







// TASK ZK:

// Shunday function yozing, bu function har bir soniyada bir marotaba
// console'ga 1'dan 5'gacha bo'lgan raqamlarni chop etsin va
// 5 soniyadan so'ng function o'z ishini to'xtatsin
  
// MASALAN: printNumbers();

// function printNumbers(): void {
//   let current: number = 1;
//   const interval: NodeJS.Timeout = setInterval(() => {
//     console.log(current); 
//     if (current === 5) {
//       clearInterval(interval);
//     }
//     current++; 
//   }, 1000); 
// }

// printNumbers();











// ZL-TASK:

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin. Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”

// function stringToKebab(input: string): string {
//   return input
//     .toLowerCase() 
//     .replace(/\s+/g, '-');
// }

// console.log(stringToKebab("Kebab Case"));










// ZM-TASK:

// Shunday function yozing, uni array va number parametri bolsin. Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]


// function rotateArray<T>(arr: T[], index: number): T[] {
//   const rotatedPart = arr.splice(index + 1); 
//   return rotatedPart.concat(arr);
// }

// const result = rotateArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// console.log(result);









// ZN-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true


// function areParenthesesBalanced(input: string): boolean {
//   let count = 0;

//   for (const char of input) {
//     if (char === '(') count++; 
//     if (char === ')') count--; 

//     if (count < 0) return false;
//   }

//   return count === 0;
// }

// console.log(areParenthesesBalanced("string()ichida(qavslar)soni()balansda")); 







// ZO-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}


// function countNumberAndLetters(input: string): { number: number; letter: number } {
//   let numberCount = 0;
//   let letterCount = 0;

//   for (const char of input) {
//     if (/[0-9]/.test(char)) {
//       numberCount++;
//     } else if (/[a-zA-Z]/.test(char)) {
//       letterCount++;
//     }
//   }

//   return { number: numberCount, letter: letterCount };
// }

// console.log(countNumberAndLetters("1234qawsew@")); 






// ZP-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]


// function findDuplicates(arr: number[]): number[] {
//   const counts: { [key: number]: number } = {}; 
//   const duplicates: number[] = [];
//   for (const num of arr) {
//     counts[num] = (counts[num] || 0) + 1;
//   }

//   for (const key in counts) {
//     if (counts[key] > 1) {
//       duplicates.push(Number(key)); 
//     }
//   }
//   return duplicates;
// }

// console.log(findDuplicates([1, 2, 3, 4, 5, 4, 3, 4])); 





// ZQ-TASK:

// Shunday function yozing, u parametridagi arrayni ichidagi 1 marta kelgan elemnetni qaytarsin.
// MASALAN: singleNumber([4, 2, 1, 2, 1]) return 4

// function singleNumbers(nums: number[]): number[] {
//     const result: number[] = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
//             result.push(nums[i]); 
//         }
//     }
//     return result;
// }

// console.log(singleNumbers([1, 1, 2, 2, 3, 4]));


// ZR-TASK:

// Shunday function yozing, u parametridagi string ichida 1 martadan ortiq qaytarilmagan birinchi harf indeksini qaytarsin.
// MASALAN: firstUniqueCharIndex(“stamp”) return 0


// function takrorlanmaganIndex(string: string): number {
//   for(let i = 0; i < string.length; i++) {
//     if ( string.indexOf(string[i]) === string.lastIndexOf(string[i])) {
//       return i;
//     }
//   }
//   return -1
// }

// console.log(takrorlanmaganIndex("1122336"));



// ZS-TASK:

// Shunday function yozing, u parametridagi array ichida takrorlanmagan raqamlar yig'indisini qaytarsin.
// MASALAN: sumOfUnique([1,2,3,2]) return 4


// function sumOfUnique(nums: number[]): number {
//   return nums
//     .filter(num => nums.indexOf(num) === nums.lastIndexOf(num)) 
//     .reduce((sum, num) => sum + num, 0); 
// }

// console.log(sumOfUnique([1, 2, 4, 4]));



// ZT-TASK:


// Shunday function yozing, u parametridagi array ichidagi barcha nollarni array oxiriga qoyib qolgan raqamlar ketma-ketligini saqlasin.
// MASALAN: moveZeroes([0, 1, 0, 3, 12]) return [1, 3, 12, 0, 0] 


// function moveZeroes(arr: number[]): number[] {
//   const nonZeroes = []; 
//   const zeroes = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       zeroes.push(arr[i]);
//     } else {
//       nonZeroes.push(arr[i]);
//     }
//   }

//   return nonZeroes.concat(zeroes);
// }

// console.log(moveZeroes([4, 0, 10, 0, 3]));





// ZU-TASK:


// Shunday function yozing, uni 2 ta parametri bo'lsin, biri array va biri string. Function arrayda berilgan malumotlarni 2-parametrdagi string qiymati asosida guruhlab qaytarsin.
// MASALAN:
// const data = [
//   { name: 'Alice', age: 25, city: 'London' },
//   { name: 'Bob',   age: 30, city: 'New York' },
//   { name: 'Charlie', age: 25, city: 'London' },
// ];
// console.log(groupBy(data, 'city')); // { 'London': [ { name: 'Alice', age: 25, city: 'London' }, { name: 'Charlie', age: 25, city: 'London' } ], 'New York': [ { name: 'Bob', age: 30, city: 'New York' } ] }



// function groupBy<T>(array: T[], key: keyof T): { [key: string]: T[] } {
//   return array.reduce((result, item) => {
//     const groupValue = String(item[key]); 
//     if (!result[groupValue]) {
//       result[groupValue] = []; 
//     }
//     result[groupValue].push(item); 
//     return result;
//   }, {} as { [key: string]: T[] }); 
// }

// const data = [
//   { name: 'Alice', age: 25, city: 'London' },
//   { name: 'Bob', age: 30, city: 'New York' },
//   { name: 'Charlie', age: 25, city: 'London' },
// ];

// console.log(groupBy(data, 'city'));











/* Request:
   Traditional Api
   Rest Api
   GraphQL Api
   ...
*/

/* Frontend Development:
   Traditional FD   => SSR   => EJS
   Modern FD        => SPA   => REACT
*/

/* Cookies:
   request join
   self destroy
*/

/* Validation:
   Frontend validation
   Backend validation
   Database validation
*/

/*
PM2 COMMANDS:

pm2 ls
pm2 start dist/server.js --name=BURAK
pm2 start "npm run start:prod" --name=BURAK
pm2 stop id
pm2 delete id
pm2 restart id
pm2 monit
pm2 kill

*/
