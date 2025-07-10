import {Animal, Dog, Library, Motorcycle } from "./src/export";

//work1.ts
const animal = new Animal("Some Animal", "Unknown");
animal.sound(); // The animal makes a sound

const dog = new Dog("Buddy", "Dog", "Labrador");
dog.sound(); // The dog barks

//work2.ts
const lib1 = new Library("Central Library");
lib1.addBook();
lib1.addBook();

const lib2 = new Library("Local Library");
lib2.addBook();

console.log(Library.getTotalBooks()); // 3

//work3.ts
const bike = new Motorcycle("Yamaha", "MT-07", "Sport");
console.log(bike); 



