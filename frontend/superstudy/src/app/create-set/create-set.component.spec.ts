import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CreateSetComponent } from './create-set.component';
import { TokenStorageService } from '../_services/token-storage.service';

const mockTokenStorageService = {
  getUser: () => {
    return {
      roles: [
        'ROLE_TEACHER'
      ]
    }
  }
};

describe('CreateSetComponent', () => {
  let component: CreateSetComponent;
  let fixture: ComponentFixture<CreateSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSetComponent ],
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
    fixture = TestBed.createComponent(CreateSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
