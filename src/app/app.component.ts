import { translate } from 'angular';
import { Component } from 'angular-ts-decorators';
import { ILanguageConfg } from './language-conf.interface';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {
  public languages: ILanguageConfg[] = [
    {
      id: 'en',
      country: 'gb'
    },
    {
      id: 'it',
      country: 'it'
    },
    {
      id: 'ru',
      country: 'ru'
    },
  ];

  /*@ngInject*/
  constructor(private $translate: translate.ITranslateService) { }

  public isCurrentLanguage(languageId: string): boolean {
    const currentId =  this.$translate.use();
    return currentId && languageId && currentId.toLowerCase() === languageId.toLowerCase();
  }

  public setCurrentLanguage(languageId: string) {
    this.$translate.use(languageId);
  }

}
