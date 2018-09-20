import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatDialogModule, MatToolbarModule, MatIconModule } from '@angular/material';
// import { ContactService } from './service/contact.service';
// import { ContactListComponent } from './contact-list/contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { SaveBookComponent } from './save-book/save-book.component';
import { booksService } from './service/booksService.service';

import { DeleteBookComponent } from './delete-book/delete-book.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import "rxjs/Rx";
import { EditBookComponent } from './edit-book/edit-book.component';
import { bookFilterPipe } from './book-list/book-filter.pipe';
import { bookTitlePipe } from './book-list/book-Title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // ContactComponent,
    // ContactListComponent,
    BookListComponent,
    SaveBookComponent,
    DeleteBookComponent,
    HeaderComponent,
    FooterComponent,
    PagenotFoundComponent,
    HomeComponent,
    EditBookComponent,
    bookFilterPipe,
    bookTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [booksService],
  entryComponents: [SaveBookComponent,DeleteBookComponent,EditBookComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
