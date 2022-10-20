import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardTeacherComponent } from './board-teacher/board-teacher.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ChangePassComponent } from './change_pass/change-pass.component';
import { AuthGuard } from './_services/auth.guards';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateSetComponent } from './create-set/create-set.component';
import { DisplayAllSetsComponent } from './display-all-sets/display-all-sets.component';
import { FlashcardComponent } from './flashcard/flashcard.component';
import { ClassRoomComponent } from './class-room/class-room.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { ClassInfoComponent } from './class-info/class-info.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { SetMenuComponent } from './set-menu/set-menu.component';
import { SetPreviewComponent } from './set-preview/set-preview.component';
import { ClassEditComponent } from './class-edit/class-edit.component';

const routes: Routes = [
  {
    path: 'change_pass',
    component: ChangePassComponent,
    canActivate: [AuthGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user', component: BoardUserComponent, canActivate: [AuthGuard] },
  {
    path: 'teacher',
    component: BoardTeacherComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: BoardAdminComponent, canActivate: [AuthGuard] },
  {
    path: 'create-set',
    component: CreateSetComponent,
    canActivate: [AuthGuard],
  },
  { path: 'all-sets', component: DisplayAllSetsComponent }, // dopisać AuthGuard
  { path: 'class-room/:id', component: ClassRoomComponent }, // dopisać AuthGuard
  { path: 'all-classes', component: AllClassesComponent }, // dopisać AuthGuard
  { path: 'class-info/:id', component: ClassInfoComponent }, // dopisać AuthGuard
  { path: 'create-class', component: CreateClassComponent }, // dopisać AuthGuard
  {
    path: 'set-menu/:id',
    component: SetMenuComponent,
    data: { message: false },
    canActivate: [AuthGuard],
  },
  {
    path: 'set/:id',
    component: FlashcardComponent,
    data: { message: false },
    canActivate: [AuthGuard],
  },
  {
    path: 'set-preview/:id',
    component: SetPreviewComponent,
    data: { message: false },
    canActivate: [AuthGuard],
  },
  { path: 'edit-class/:id', component: ClassEditComponent }, // dopisać AuthGuard
  // { path: 'set/:id', component: FlashcardComponent, data :{ message: false},canActivate: [AuthGuard]},
  // { path: 'editset/:id', component: FlashcardComponent, data :{ message: true},canActivate: [AuthGuard]},
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
