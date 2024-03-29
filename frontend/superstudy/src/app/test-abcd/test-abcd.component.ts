import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FlashcardsService } from '../_services/flashcards.service';
// @ts-ignore
import 'mathlive';

@Component({
  selector: 'app-test-abcd',
  templateUrl: './test-abcd.component.html',
  styleUrls: ['./test-abcd.component.scss'],
})
export class TestAbcdComponent implements OnInit, OnDestroy {
  public id;
  public test = [];
  public switch = false;
  public mathMode = (localStorage?.getItem('math-mode-super-study') === 'true');
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTest();
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public getTest(): void {
    this.flashcardsService
      .getAbcdTest(this.id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((testData) => {
        this.test = testData;
        console.log(this.test);
      });
  }

  public isCorrect(id: number, answer: string): void {
    this.test[id].checked = true;
    this.test[id].answer = answer;
    this.test[id].answer2 = answer;
  }

  public changeColor(id: number, answer: string): string {
    if (this.test[id]?.checked && this.test[id].answer === answer && this.switch == false) {
      console.log(
        id,
        this.test[id],
        this.test[id].trueFalse,
        this.test[id].answer
      );

      if (this.test[id].second_side === this.test[id].answer) {
        return '#3DB86E'; //green
      }
      return '#EC1845'; //red
    }

    else if (this.test[id]?.checked && this.test[id].answer2 === answer && this.switch == true) {
      console.log(
        id,
        this.test[id],
        this.test[id].trueFalse,
        this.test[id].answer2
      );

      if (this.test[id].first_side === this.test[id].answer2) {
        return '#3DB86E'; //green
      }
      return '#EC1845'; //red
    }

    if (this.test[id]?.checked && this.test[id].second_side === answer && this.switch == false) {
      return '#3DB86E'; //green
    }

    else if (this.test[id]?.checked && this.test[id].first_side === answer && this.switch == true) {
      return '#3DB86E'; //green
    }
    return '#BDDCFF';
  }

  changeLanguage(): void {
    this.switch = !this.switch;
  }

  public enableMathMode(){
    this.mathMode = !this.mathMode;
    localStorage?.setItem('math-mode-super-study', `${this.mathMode}`);
  }
}
