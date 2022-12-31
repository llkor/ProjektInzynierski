import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';

import { TestMixComponent } from './test-mix.component';

describe('TestMixComponent', () => {
  let component: TestMixComponent;
  let fixture: ComponentFixture<TestMixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMixComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
