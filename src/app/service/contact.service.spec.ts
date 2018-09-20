// import { TestBed, inject } from '@angular/core/testing';

// import { ContactService } from './contact.service';

// describe('ContactService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [ContactService]
//     });
//   });

//   it('should be created', inject([ContactService], (service: ContactService) => {
//     expect(service).toBeTruthy();
//   }));
// });
import { TestBed, inject } from '@angular/core/testing';

// import { ContactService } from './contact.service';
import { booksService } from './booksService.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [booksService]
    });
  });

  it('should be created', inject([booksService], (service: booksService) => {
    expect(service).toBeTruthy();
  }));
});
