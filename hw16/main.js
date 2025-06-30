"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const export_1 = require("./src/export");
//work1.ts
(0, export_1.greetUser)("Pavlo");
//work2.ts
const person = {
    name: "Pavlo",
    age: 33,
    city: "Kyiv",
};
(0, export_1.printPersonInfo)(person);
//work3.ts
const number = 5;
const squared = (0, export_1.squreNumber)(number);
console.log(`The square of ${number} is ${squared}.`);
//work4.ts
const number1 = 10;
const result = (0, export_1.isEven)(number1);
console.log(`Is the number ${number1} even? ${result}.`);
const number2 = 7;
const result2 = (0, export_1.isEven)(number2);
console.log(`Is the number ${number2} even? ${result2}.`);
//work5.ts
const student = {
    name: "Pavlo",
    grade: 99,
};
(0, export_1.printStudentInfo)(student);
//work6.ts
const message = "Hello, this is a log message!";
(0, export_1.logMessage)(message);
