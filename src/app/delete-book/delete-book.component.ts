import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { booksService } from '../service/booksService.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit  {
    public bookForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DeleteBookComponent>,
    private booksService: booksService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
     }
     ngOnInit() {
     this.bookForm = this._formBuilder.group({
        bookID: [this.data.ID],
        authorName: [ this.data.authorName, [Validators.required]],
        publishedDate: [ this.data.publishedDate, [Validators.required]],
        bookTitle: [ this.data.bookTitle, [Validators.required]],
      });
    }
  
    onSubmit() {
        if (isNaN(this.data.ID)) {
            this.booksService.deleteBook(this.data.ID);
            this.dialogRef.close();
          }
      
    }

}
