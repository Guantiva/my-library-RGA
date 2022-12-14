import { Component } from '@angular/core';
import { Book } from './models/book.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My library';
  books:  Book[] = [
       new Book('Don Quijote','Cervantes','Novela',1800,"" ),   
       new Book('100 años de soledad','Garcia Marquez','Novela',1980,"" ),   
       new Book('El señor de los anillos','Tolkien','Fantasia',2000,"" )
      ]
      selectedBook: Book =this.books[0]

      createBook(newbook: Book ) {
        this.books.push(newbook)
      } 

      setSelectedBook(selectBook: Book){
        this.selectedBook =  selectBook 
       }
}
