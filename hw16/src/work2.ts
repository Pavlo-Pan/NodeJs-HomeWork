export interface Person {
    name: string;  
    age: number;
    city: string;
}
export function printPersonInfo(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, City: ${person.city}`);
}
