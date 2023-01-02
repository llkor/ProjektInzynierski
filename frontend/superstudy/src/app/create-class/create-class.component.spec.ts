import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorageService } from '../_services/token-storage.service';
import { FormsModule } from '@angular/forms';

import { CreateClassComponent } from './create-class.component';

const mockTokenStorageService = {
  getUser: () => {
    return {
      roles: [
        'ROLE_TEACHER'
      ]
    }
  }
};

describe('DisplayAllSetsComponent', () => {
  let component: CreateClassComponent;
  let fixture: ComponentFixture<CreateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClassComponent ],
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
    fixture = TestBed.createComponent(CreateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
