import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Book } from '../models/book.model';
import { Logger } from '../services/logger.services';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
  //providers: [Logger] para dejar un servicio, pero se debe quitar root del service
})
export class BookListComponent {
  title='Lista de Libros'
  @Input() books: Book[] = [];
  @Output() selectBookEvent = new EventEmitter<Book>()

  
  constructor(private logger: Logger, private alertService: AlertService){}
   

  //constructor(private logger: Logger){}   
  selectBook(book: Book){
    this.selectBookEvent.emit(book)
    const message = "Se ha seleccionado el libro "+book.name
    this.logger.log(message)
    this.alertService.showAlert(message)
  
   // this.logger.log("Se ha seleccionado el libro "+ book.name)
  }
}
