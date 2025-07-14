import {
  capitalize, reverseString,  Finance, UserManagement,generateFibonacci, generatePrimeNumbers
} from "./src/export";

// Задание 1
console.log(capitalize("hello world")); // Hello world
console.log(reverseString("TypeScript")); // tpircSpeyT

// Задание 2
const loanPayment = Finance.LoanCalculator.calculateMonthlyPayment(100000, 5, 15);
console.log(`Ежемесячный платеж: ${loanPayment.toFixed(2)}`);

const tax = Finance.TaxCalculator.calculateTax(75000, 20);
console.log(`Налог на доход: ${tax}`);

// Задание 3
const admin = new UserManagement.Admin.AdminUser("Alice", "alice@example.com");
admin.displayInfo();
admin.grantSuperAdmin();
admin.displayInfo();

// Задание 4
console.log("Фибоначчи до 100:", generateFibonacci(100));
console.log("Простые числа до 50:", generatePrimeNumbers(50));
