export function displayId(id: string | number): void {
  if (typeof id === "string") {
    console.log("ID string:", id.toUpperCase());
  } else {
    console.log("ID number:", id * 10);
  }
}
