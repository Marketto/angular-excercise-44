import { translate } from 'angular';
import * as angularTranslate from 'angular-translate';
import * as angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import { NgModule } from 'angular-ts-decorators';

@NgModule({
  id: 'AppL10nModule',
  imports: [
    angularTranslate,
    angularTranslateLoaderStaticFiles
  ],
})
export class AppL10nModule {
  static config($translateProvider: translate.ITranslateProvider) {
    'ngInject';
    // Tell the module what language to use by default
    $translateProvider.preferredLanguage('en');
    $translateProvider.useLoaderCache(true);
    $translateProvider.useStaticFilesLoader({
      prefix: 'i18n/',
      suffix: '.json'
    });
    $translateProvider.forceAsyncReload(true);
  }
}
