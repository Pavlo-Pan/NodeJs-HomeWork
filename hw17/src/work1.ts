export function calculateTotal(price: number, quantity: number, discount: number = 0): number {
  const total = price * quantity;
  const discountAmount = total * (discount / 100);
  return total - discountAmount;
}