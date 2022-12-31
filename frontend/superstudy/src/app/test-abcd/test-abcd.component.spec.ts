import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { TestAbcdComponent } from './test-abcd.component';

describe('TestAbcdComponent', () => {
  let component: TestAbcdComponent;
  let fixture: ComponentFixture<TestAbcdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAbcdComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAbcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
