import { Component,EventEmitter,Input,Output,OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { Logger } from '../services/logger.services';
import { AlertService } from '../services/alert.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
  //providers: [Logger] para dejar un servicio, pero se debe quitar root del service
})
export class BookListComponent implements OnInit {
  title='Lista de Libros'
  books: Book[] = [];
 
  constructor(private logger: Logger, private alertService: AlertService, private bookService : BookService ){}
  
  ngOnInit(): void {
    console.log(this.bookService.books);
    this.books = this.bookService.books
   } 
   
  //constructor(private logger: Logger){}   
  selectBook(book: Book){
    this.bookService.setSelectedBook(book)
    const message = "Se ha seleccionado el libro "+book.name
    this.logger.log(message)
    this.alertService.showAlert(message)
  
   // this.logger.log("Se ha seleccionado el libro "+ book.name)
  }
}
