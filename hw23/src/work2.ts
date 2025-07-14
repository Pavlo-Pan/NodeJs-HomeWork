function toUpperAsync(str: string): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve(str.toUpperCase()), 300);
  });
}

export async function processStrings(array: string[]): Promise<void> {
  const promises: Promise<string>[] = array.map(toUpperAsync);
  const results: string[] = await Promise.all(promises);
  console.log(results);
}
