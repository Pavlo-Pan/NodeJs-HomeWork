function taskOne(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Результат 1"), 1000);
  });
}

function taskTwo(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Результат 2"), 500);
  });
}

function taskThree(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve("Результат 3"), 800);
  });
}

export async function runSequentially(): Promise<void> {
  const result1 = await taskOne();
  console.log(result1);

  const result2 = await taskTwo();
  console.log(result2);

  const result3 = await taskThree();
  console.log(result3);
}


