import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  books:  Book[] = [
    new Book('Don Quijote','Cervantes','Novela',1800,"" ),   
    new Book('100 años de soledad','Garcia Marquez','Novela',1980,"" ),   
    new Book('El señor de los anillos','Tolkien','Fantasia',2000,"" )
   ]

  constructor() { }

  createBook(newbook: Book ) {
    this.books.push(newbook)
  } 
}
