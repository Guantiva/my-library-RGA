import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../models/book.model'
import { AlertService } from '../services/alert.service'
import { BookService } from '../services/book.service'
import { Logger } from '../services/logger.services'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [Logger]
})
export class BookListComponent implements OnInit {
  title="Lista de libros"
  books: Book[] = []

  constructor(
    private logger: Logger, 
    private alert: AlertService,
    private bookService: BookService
  ){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(
      response => this.books = Object.values(response)
    )
  }

  selectBook(book: Book){
    this.bookService.setSelectedBook(book)
    const message = "Se ha seleccionado el libro "+book.name
    this.logger.log(message)
    this.alert.showAlert(message)
  }
}