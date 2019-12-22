import 'angular-animate';
import 'angular-aria';
import * as NgMaterial from 'angular-material';
import 'angular-material/angular-material.scss';
import 'angular-messages';
import * as NgSanitize from 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import 'flag-icon-css/sass/flag-icon.scss';
import { AppL10nModule } from './app-l10n.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileService } from './profile-settings/profile.service';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule,
    AppL10nModule,
    NgMaterial,
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
