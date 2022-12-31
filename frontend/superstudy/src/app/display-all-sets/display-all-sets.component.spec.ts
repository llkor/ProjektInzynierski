import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllSetsComponent } from './display-all-sets.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormsModule } from '@angular/forms';
import { FlashcardsService } from '../_services/flashcards.service';
import { of } from 'rxjs';

const mockTokenStorageService = {
  getUser: () => {
    return {
      roles: [
        'ROLE_TEACHER'
      ]
    }
  }
};

const mockFlashcardsService = {
  getAllSets: () => of({
      totalItems: 1,
      sets: [
        {
          id: 1,
          name: 'Test123',
          level: 'Szkoła podstawowa',
          subject: 'Język angielski',
          points: 0,
          createdAt: '2022-12-31T17:28:47.000Z',
          updatedAt: '2022-12-31T17:28:47.000Z',
          userId: 2,
          classId: null
        }
      ],
      totalPages: 1,
      currentPage: 0
    }),
    filterSets: () => of({
      totalItems: 1,
      sets: [
        {
          id: 1,
          name: 'Test123',
          level: 'Szkoła podstawowa',
          subject: 'Język angielski',
          points: 0,
          createdAt: '2022-12-31T17:28:47.000Z',
          updatedAt: '2022-12-31T17:28:47.000Z',
          userId: 2,
          classId: null
        }
      ],
      totalPages: 1,
      currentPage: 0
    }),
};

describe('DisplayAllSetsComponent', () => {
  let component: DisplayAllSetsComponent;
  let fixture: ComponentFixture<DisplayAllSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayAllSetsComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        NgxPaginationModule,
        FormsModule
      ],
      providers: [
        { provide: TokenStorageService, useValue: mockTokenStorageService },
        { provide: FlashcardsService, useValue: mockFlashcardsService }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should download sets',  () => {
    expect(component.allSets).toStrictEqual([
      {
        id: 1,
        name: 'Test123',
        level: 'Szkoła podstawowa',
        subject: 'Język angielski',
        points: 0,
        createdAt: '2022-12-31T17:28:47.000Z',
        updatedAt: '2022-12-31T17:28:47.000Z',
        userId: 2,
        classId: null
      }
    ]);
  });

  describe('filterSets',  () => {
    it('should call filterSets from flashcardsService as filterData should be equal 1', () => {
      let spy = jest.spyOn((component as any).flashcardsService, 'filterSets');

      component.filterSets('SuperStudy');

      expect(component.filterData).toStrictEqual(1);
      expect(spy).toHaveBeenCalled();
    });
  });
});
