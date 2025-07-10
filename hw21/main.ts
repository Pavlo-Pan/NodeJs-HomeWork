import {
sumEvenNumbers,
isEmptyString,
areStringsEqual,
getLastElement,
makeTriple
} from "./src/export";

//work1.ts
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
//work2.ts
console.log(isEmptyString(""));        
console.log(isEmptyString("  "));      
console.log(isEmptyString("hello"));
//work3.ts
console.log(areStringsEqual("abc", "abc")); 
console.log(areStringsEqual("abc", "def")); 
//work4.ts
console.log(getLastElement([1, 2, 3]));         
console.log(getLastElement(["a", "b", "c"])); 
//work5.ts
console.log(makeTriple(1, 2, 3));       
console.log(makeTriple("x", "y", "z"));