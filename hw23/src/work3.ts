function goodPromise1(): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("OK 1"), 200));
}

function goodPromise2(): Promise<string> {
  return new Promise(resolve => setTimeout(() => resolve("OK 2"), 300));
}

function badPromise(): Promise<string> {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Ошибка в одном из промисов")), 250)
  );
}

export async function runWithError(): Promise<void> {
  try {
    const results: string[] = await Promise.all([
      goodPromise1(),
      badPromise(),
      goodPromise2()
    ]);
    console.log("Результаты:", results);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Обнаружена ошибка:", error.message);
    }
  }
}