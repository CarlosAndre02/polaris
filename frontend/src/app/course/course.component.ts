import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CourseService } from './course.service';
import { Language } from './model/language.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  languages: Language[] = [];
  selectedLanguages: Language[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getLanguages().subscribe({
      next: (data) => {
        this.languages = data;
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      }
    });
  }

  addSelectedLanguage = (lang: Language) => {
    console.log(this.selectedLanguages);
    this.selectedLanguages.push(lang);
  };

  onSubmit = (form: NgForm) => {
    const req = {
      email: form.value.email,
      name: form.value.name,
      languages: this.selectedLanguages
    };

    this.courseService.postLPUser(req).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.error('something wrong occurred: ' + err);
      }
    });

    form.resetForm();
    this.selectedLanguages = [];
  };
}
