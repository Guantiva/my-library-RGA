import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Book } from '../models/book.model';
import { Logger } from '../services/logger.services';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  title='Lista de Libros'
  @Input() books: Book[] = [];
  @Output() selectBookEvent = new EventEmitter<Book>()
  constructor(private logger: Logger){}   
  selectBook(book: Book){
    this.selectBookEvent.emit(book)
    this.logger.log("Se ha seleccionado el libro "+ book.name)
  }
}
