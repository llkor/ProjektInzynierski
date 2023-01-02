import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorageService } from '../_services/token-storage.service';

import { BoardAdminComponent } from './board-admin.component';

const mockTokenStorageService = {
  getUser: () => {
    return {
      roles: [
        'ROLE_TEACHER'
      ]
    }
  }
};

describe('BoardAdminComponent', () => {
  let component: BoardAdminComponent;
  let fixture: ComponentFixture<BoardAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAdminComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule
      ],
      providers: [
        { provide: TokenStorageService, useValue: mockTokenStorageService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
