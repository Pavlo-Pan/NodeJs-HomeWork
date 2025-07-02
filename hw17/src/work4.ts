export type ProductInfo = [string, number, number]; // [название, цена, количество]

export function updateStock(
  inventory: { [productName: string]: number },
  productInfo: ProductInfo
): { [productName: string]: number } {
  const [name, , quantity] = productInfo;

  if (inventory[name]) {
    inventory[name] += quantity;
  } else {
    inventory[name] = quantity;
  }

  return inventory;
}
