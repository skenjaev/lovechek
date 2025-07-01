
/*

Project Standarts
-Logging standarts
-Naming standarts
    function, method, variable => camelaCase
    class =>Pascal
    folder => Kebab
    css => snake
-Error handling

*/

/*
Traditional API
REST API
GraphQL API
*/




















/*
TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1

*/

// function getHighestIndex(...number) {

//     const maxIndex = Math.max(...number)
//     return number.indexOf(maxIndex)
// };
// console.log(getHighestIndex(4, 32, 21, 12))

/*
H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

@MITASK
*/

// function getPositive(numbers: number[]): string {
//     return numbers.filter((num: number) => num > 0).join('');
// }

// console.log(getPositive([1, -4, 2]))

/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"

*/


// function getDigits(str: string): string {
//     return str
//         .split('')
//         .filter(digit => digit >= '0' && digit <= '9')
//         .join('');
// }


// console.log(getDigits("m14i1t"))

/*
TASK I:

Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4
*/


// function majorityElement(a: number[]) {
//     let max = 0;
//     let most;

//     for (let i = 0; i < a.length; i++) {
//         let count = 0;

//         for (let j = 0; j < a.length; j++) {
//             if (a[i] === a[j]) {
//                 count++;
//             }
//         }

//         if (count > max) {
//             max = count;
//             most = a[i];
//         }
//     }

//     return most;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]))



/*

TASK J:

Shunday function tuzing, u string qabul qilsin.
Va string ichidagi eng uzun so'zni qaytarsin.

MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

*/


function findLongestWord(a:string){
    const word = a.split(" ");
    let longestWord ="";
    for( let i= 0; i<word.length;i++){
        if(word[i].length > longestWord.length){
            longestWord = word[i]
        }
    }
    return longestWord;
}

console.log(findLongestWord("I came from Uzbekistan"))