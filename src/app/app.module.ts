import 'angular-animate';
import 'angular-aria';
import * as ngMaterial from 'angular-material';
import 'angular-material/angular-material.scss';
import 'angular-messages';
import * as ngSanitize from 'angular-sanitize';
import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileService } from './profile.service';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule,
    ngMaterial,
    ngSanitize
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
