import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashcardsService } from '../_services/flashcards.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-display-all-sets',
  templateUrl: './display-all-sets.component.html',
  styleUrls: ['./display-all-sets.component.scss'],
})
export class DisplayAllSetsComponent implements OnInit, OnDestroy {
  public allSets = [];
  public filteredSets = [];
  public filterOption = '';
  public isFiltered = false;
  public filterData = 0;
  public user;
  public isTeacher = false;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [3, 6, 9];

  public getAllSetsSubscription;
  public filterSetsSubscription;

  constructor(
    private flashcardsService: FlashcardsService,
    private router: Router,
    private token: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.retrieveSets();
    this.user = this.token.getUser();
    if (this.user.roles.includes('ROLE_TEACHER')) {
      this.isTeacher = true;
    }
  }

  ngOnDestroy(): void {
    this.getAllSetsSubscription?.unsubscribe();
  }

  getAllSets() {
    this.isFiltered = false;
    this.getAllSetsSubscription = this.flashcardsService
      .getAllSets()
      .subscribe((response) => {
        console.log(response);
        this.allSets = response.sets;
      });
  }

  navigateToSet(id) {
    this.router.navigate([`set-menu/${id}`]);
  }

  moveToEdit(id) {
    this.router.navigate([`set/${id}`]);
  }

  isSuperStudySet(points: number) {
    if (points == 0) {
      return false;
    } else {
      return true;
    }
  }

  isClassSet(id: number) {
    if (id != this.user.id) {
      return true;
    } else {
      return false;
    }
  }

  filterSets(option: String) {
    this.isFiltered = true;
    if (option === 'SuperStudy') {
      this.filterData = 1;
    }
    if (option === 'Zestawy klasy') {
      this.filterData = 2;
    }
    if (option === 'Moje zestawy') {
      this.filterData = 3;
    }
    const data = {
      filter: this.filterData,
    };
    console.log(data);
    this.filterSetsSubscription = this.flashcardsService
      .filterSets(this.filterData)
      .subscribe((res) => {
        console.log(res);
        this.allSets = res;
      });
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveSets(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.flashcardsService.getAllSets(params).subscribe(
      (response) => {
        const { sets, totalItems } = response;
        this.allSets = sets;
        this.count = totalItems;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveSets();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveSets();
  }
}
