export function generateFibonacci(limit: number): number[] {
  const result: number[] = [];
  let a = 0, b = 1;
  while (a <= limit) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
}

export function generatePrimeNumbers(limit: number): number[] {
  const primes: number[] = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
}
