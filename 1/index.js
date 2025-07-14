/* ## Задание 1
Напишите функцию isPalindrom, которая проверяет, является ли переданная строка палиндромом 
(читается слева направо и справа налево одинаково), например "топот"
## Задание 2
Напишите функцию removeDuplicates, удаляющую дубликаты из массива без использования Set
# Задание 3
Напишите функцию getMostCommonLetter, которая получает строку, и возвращает самую часто встречающуся букву в строке */

function isPalindrom(str) {
    const cleanedStr = str.replace(/[^a-zA-Zа-яА-ЯёЁ0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}
console.log(isPalindrom("топот")); // true
console.log(isPalindrom("привет")); // false






/* ## Задание 2
Напишите функцию removeDuplicates, удаляющую дубликаты из массива без использования Set */
function removeDuplicates(arr) {
    const newArr = []
    for (const item of arr) {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    }
    return newArr
}
const arr1 = [{name: 'Pascha'}, {name: 'Pascha'}, 2, 3, 3, 6]
console.log(removeDuplicates(arr1)) // [1, 2, 3, 6]