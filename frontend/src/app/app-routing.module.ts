import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'course', component: CourseComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }