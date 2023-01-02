import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorageService } from '../_services/token-storage.service';

import { BoardUserComponent } from './board-user.component';

const mockTokenStorageService = {
  getUser: () => {
    return {
      roles: [
        'ROLE_TEACHER'
      ]
    }
  }
};

describe('BoardUserComponent', () => {
  let component: BoardUserComponent;
  let fixture: ComponentFixture<BoardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardUserComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule,
        FormsModule
      ],
      providers: [
        { provide: TokenStorageService, useValue: mockTokenStorageService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
