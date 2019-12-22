import * as NgAnimate from 'angular-animate';
import * as NgAria from 'angular-aria';
import * as NgMaterial from 'angular-material';
import * as NgMessages from 'angular-messages';
import * as NgSanitize from 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import { AppL10nModule } from './app-l10n.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileService } from './profile-settings/profile.service';

import 'angular-material/angular-material.scss';
import 'flag-icon-css/sass/flag-icon.scss';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule,
    AppL10nModule,
    NgAnimate,
    NgAria,
    NgMaterial,
    NgMessages,
    NgSanitize
  ],
  declarations: [
    AppComponent,
    ProfileSettingsComponent
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
