import { Component, Input } from '@angular/core';

import { Language } from '../../model/language.model';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.css']
})
export class LanguageCardComponent {
  @Input() language: Language = {} as Language;
  @Input() addToSelectedLanguages = (lang: Language) => {};

  constructor() {}

  onAddLanguage() {
    this.addToSelectedLanguages(this.language);
  }
}
