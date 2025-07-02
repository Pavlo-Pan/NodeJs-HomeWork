interface Product {
  name: string;
  price: number;
}

interface CalculateDiscount {
  (product: Product, discount: number): number;
}

export const calculateDiscount: CalculateDiscount = (product, discount) => {
  return product.price * (1 - discount / 100);
};


