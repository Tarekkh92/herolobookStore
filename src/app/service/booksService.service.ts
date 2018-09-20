import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';

@Injectable()
export class booksService {

  _booksList: Book[] = [];

  constructor() { }

  addBook(book: Book) {
    book.ID = this._booksList.length + 1;
    this._booksList.push(book);
  }

  editBook(book: Book) {
    const index = this._booksList.findIndex(c => c.ID === book.ID);
    this._booksList[index] = book;
  }

  deleteBook(id: number) {
    const contact = this._booksList.findIndex(c => c.ID === id);
    this._booksList.splice(contact, 1);
  }

  getAllBooks() {
    return this._booksList;
  }
}
