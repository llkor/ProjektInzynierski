import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TokenStorageService } from '../_services/token-storage.service';

import { AllClassesComponent } from './all-classes.component';

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
  let component: AllClassesComponent;
  let fixture: ComponentFixture<AllClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClassesComponent ],
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
    fixture = TestBed.createComponent(AllClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
