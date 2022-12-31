import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { BoardModeratorComponent } from './board-moderator.component';

describe('BoardModeratorComponent', () => {
  let component: BoardModeratorComponent;
  let fixture: ComponentFixture<BoardModeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardModeratorComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatIconModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardModeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
