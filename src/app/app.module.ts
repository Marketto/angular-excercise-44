import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileService } from './profile.service';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
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
