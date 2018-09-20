
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { booksService } from '../service/booksService.service';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

    public bookForm: FormGroup;

    constructor(private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditBookComponent>,
    private booksService: booksService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  
    onNoClick(): void {
      this.dialogRef.close();
     }
  
    ngOnInit() {
      this.bookForm = this._formBuilder.group({
        ID: [this.data.ID],
        authorName: [ this.data.authorName, [Validators.required]],
        publishedDate: [ this.data.publishedDate, [Validators.required]],
        bookTitle: [ this.data.bookTitle, [Validators.required]],
      });
    }
  
    onSubmit() {
     
        this.booksService.editBook(this.bookForm.value);
         this.dialogRef.close();
      
    }

}
