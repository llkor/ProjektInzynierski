import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FlashcardsService } from './flashcards.service';

describe('FlashcardsService', () => {
  let service: FlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(FlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
