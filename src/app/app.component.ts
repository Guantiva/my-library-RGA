import { Component } from '@angular/core';
import { Book } from './models/book.model';
import { BookService } from './services/book.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My library';
      
}
