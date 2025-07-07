export const sumEvenNumbers = (numbers: number[]): number =>
  numbers.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);