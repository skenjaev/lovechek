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

function getPositive(numbers: number[]): string {
    return numbers.filter((num: number) => num > 0).join('');
}

console.log(getPositive([1, -4, 2]))
