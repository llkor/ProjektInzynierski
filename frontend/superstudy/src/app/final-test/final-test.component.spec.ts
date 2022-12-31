import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';


import { FinalTestComponent } from './final-test.component';

describe('FinalTestComponent', () => {
  let component: FinalTestComponent;
  let fixture: ComponentFixture<FinalTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalTestComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
