import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { booksService } from '../service/booksService.service';
import { SaveBookComponent } from '../save-book/save-book.component';
import { DeleteBookComponent } from '../delete-book/delete-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    isPopupOpened = true;
    searchTerm:string;

    constructor(private dialog?: MatDialog,private _contactService?: booksService) { }
  
    ngOnInit() {
       
    }
  
    get BookList() {
      return this._contactService.getAllBooks();
    }
  
    addBook() {
      this.isPopupOpened = true;
      const dialogRef = this.dialog.open(SaveBookComponent, {
        data: {}
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
      });
    }
  
    editBook(id: number) {
      this.isPopupOpened = true;
      const contact = this._contactService.getAllBooks().find(c => c.ID === id);
      const dialogRef = this.dialog.open(EditBookComponent, {
        data: contact
      });
  
  
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
      });
    }
  
    deleteBook(id: number) {
        this.isPopupOpened = true;
         const dialogRef = this.dialog.open(DeleteBookComponent, {
             data: {}
          });
    //   this._contactService.deleteBook(id);
      dialogRef.afterClosed().subscribe(result => {
        this.isPopupOpened = false;
    });
    
   

}

}
