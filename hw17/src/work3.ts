type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
  orderId: string;
  amount: number;
  status: OrderStatus;
};

export const orders: Order[] = [
  { orderId: "001", amount: 100, status: "pending" },
  { orderId: "002", amount: 200, status: "shipped" },
  { orderId: "003", amount: 150, status: "delivered" },
];

export function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
  return orders.filter(order => order.status === status);
}
