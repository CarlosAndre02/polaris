import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LanguageCardComponent } from './course/components/language-card/language-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProfileComponent,
    HeaderComponent,
    LanguageCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
