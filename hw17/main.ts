import {
  calculateTotal,
  displayId,
  filterOrdersByStatus,
  orders,
  updateStock, ProductInfo
} from "./src/export";

//work1.ts
const total1 = calculateTotal(100, 2); 
console.log(total1);

const total2 = calculateTotal(50, 4, 30); 
console.log(total2);

//work2.ts
const id = "abc123";
displayId(id);

const id1 = 7;
displayId(id1);

//work3.ts
const pendingOrders = filterOrdersByStatus(orders, "pending");
console.log(pendingOrders);

const deliveredOrders = filterOrdersByStatus(orders, "delivered");
console.log(deliveredOrders);

//work4.ts

let inventory:  {[productName: string]: number } = {
  "Laptop": 5,
  "Phone": 10
};

const newProduct: ProductInfo = ["Laptop", 1200, 3];
inventory = updateStock(inventory, newProduct);

console.log(inventory); 


const anotherProduct: ProductInfo = ["Tablet", 700, 2];
inventory = updateStock(inventory, anotherProduct);

console.log(inventory); 

