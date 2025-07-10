export class Library {
  static totalBooks: number = 0;

  name: string;
  books: number;


  constructor(name: string) {
    this.name = name;
    this.books = 0;
  }

  addBook() {
    this.books += 1;
    Library.totalBooks += 1;
  }

  static getTotalBooks() {
    return Library.totalBooks;
  }
}

