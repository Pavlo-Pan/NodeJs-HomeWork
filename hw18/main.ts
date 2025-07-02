import {
  AdminUser,
  printCarInfo,
  myCar,
  calculateDiscount,
  getSalaries,
  employees,
  student,
  printStudentInfo,
  concatStrings,
} from "./src/export";

//work1.ts
const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  permissions: ["read", "write", "delete"],
};
console.log(adminUser);

//work2.ts
printCarInfo(myCar);

//work3.ts
const discountedPrice = calculateDiscount({ name: "Laptop", price: 1000 }, 15);
console.log(discountedPrice);

//work4.ts

const salaries = getSalaries(employees);
console.log(salaries);

//work5.ts

printStudentInfo(student);

//work6.ts

const result = concatStrings("Hello, ", "world!");
console.log(result);
