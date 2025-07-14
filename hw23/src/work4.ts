function delayedNumber(num: number): Promise<number> {
  return new Promise(resolve => {
    setTimeout(() => resolve(num), num);
  });
}

export async function waitAll(numbers: number[]): Promise<void> {
  const promises: Promise<number>[] = numbers.map(delayedNumber);
  const results: number[] = await Promise.all(promises);
  console.log("Завершились:", results);
}