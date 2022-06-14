import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashcardsService } from '../_services/flashcards.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss'],
})
export class FlashcardComponent implements OnInit, OnDestroy {
  private id;
  public set = [];
  public success = false;
  public addFlashcardMode = false;
  public newFlashcard = {
    first_side: [''],
    second_side: [''],
  };
  public getSetSubscription;
  public deleteSetSubscription;
  public editFlashcardSubscription;
  public deleteFlashcardSubscription;
  public addNewFlashcardSubscription;
  public setDetails = {
    name: 'Przykladowa nazwa',
  };

  constructor(
    private flashcardsService: FlashcardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getSet();
  }

  public getSet(): void {
    this.getSetSubscription = this.flashcardsService
      .getSet(this.id)
      .subscribe((d) => {
        console.log(d);
        this.set = d;
        this.getSetSubscription.unsubscribe();
      });
    console.log(this.id);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.deleteSetSubscription?.unsubscribe();
    this.getSetSubscription?.unsubscribe();
    this.editFlashcardSubscription?.unsubscribe();
    this.deleteFlashcardSubscription?.unsubscribe();
    this.addNewFlashcardSubscription?.unsubscribe();
  }

  public deleteSet() {
    this.deleteSetSubscription = this.flashcardsService
      .deleteSet(this.id)
      .subscribe((d) => {
        console.log(d);
        this.success = true;
        setTimeout(() => {
          this.router.navigate([`all-sets`]);
        }, 2000);
      });
  }

  public enableEditFlashcard(index) {
    this.set[index].editMode = true;
  }

  public selectFile(event: any, index: number): void {
    this.set[index].file = event.target.files[0];
    console.log(this.set[index]);
    if (this.set[index].file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        console.log(e.target.result);
        this.set[index].file = e.target.result;
      };

      reader.readAsDataURL(this.set[index].file);
    }
  }

  public confirmEdit(index, id) {
    console.log(this.set[index].file);
    const requestBody = {
      //file: JSON.stringify(this.set[index].file),
      first_side: this.set[index].first_side,
      second_side: this.set[index].second_side,
    };
    //formData.append('first_side', this.set[index].first_side);
    //formData.append('second_side', this.set[index].second_side);
    //console.log(formData);
    this.editFlashcardSubscription = this.flashcardsService
      .editFlashcard(requestBody, id)
      .subscribe(
        (d) => {
          console.log(index, id);
          console.log(d);
          this.set[index].editMode = false;
        },
        (error) => {
          console.error(error);
        }
      );

    let formData = new FormData();
    formData.append('file', JSON.stringify(this.set[index].file));
    // const requestBodyFile = {
    //   file: this.set[index].file,
    // };
    //console.log(requestBodyFile);
    this.flashcardsService.uploadFile(formData, id).subscribe(
      (d) => {
        console.log(index, id);
        console.log(d);
        //this.set[index].editMode = false;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public deleteFlashcard(id) {
    this.deleteFlashcardSubscription = this.flashcardsService
      .deleteFlashcard(id)
      .subscribe(
        (d) => {
          console.log(id);
          console.log(d);
          this.getSet();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  public enableAddFlashcardMode() {
    this.addFlashcardMode = true;
  }

  public confirmAddNewFlashcard() {
    console.log(this.newFlashcard, this.id);
    this.addNewFlashcardSubscription = this.flashcardsService
      .addNewFlashcard(this.newFlashcard, this.id)
      .subscribe(
        (d) => {
          console.log(d);
          this.getSet();
          this.newFlashcard = {
            first_side: [''],
            second_side: [''],
          };
        },
        (error) => {
          console.error(error);
        }
      );
  }

  public cancelAddNewFlashcard() {
    this.addFlashcardMode = false;
  }
}
