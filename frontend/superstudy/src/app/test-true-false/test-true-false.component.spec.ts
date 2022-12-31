import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { TestTrueFalseComponent } from './test-true-false.component';

describe('TestTrueFalseComponent', () => {
  let component: TestTrueFalseComponent;
  let fixture: ComponentFixture<TestTrueFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTrueFalseComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTrueFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
