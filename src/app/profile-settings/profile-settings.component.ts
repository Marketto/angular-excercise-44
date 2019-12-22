import { Component, OnInit } from 'angular-ts-decorators';
import { ProfileService } from '../profile.service';
import { ISelectedUser } from '../selectedUser.interface';
import { TProfileStatus } from './profile-status.type';

@Component({
  selector: 'app-profile-settings',
  template: require('./profile-settings.component.html'),
  styles: [ require('./profile-settings.component.scss') ]
})
export class ProfileSettingsComponent implements OnInit {
  ​public ​selectedUser: ISelectedUser;
  ​public ​title: string​;
  public status: TProfileStatus = 'LOADING';

  /*@ngInject*/
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadProfile();
  }

  public loadProfile() {
    this.profileService.getProfileUser()
      .then(profile => {
        this.selectedUser = profile;
        this.status = 'SAVED';
      })
      .catch(() => {
        this.status = 'ERROR';
      });
  }

  ​public saveProfile() {
    this.profileService.setUsername(this.​selectedUser.username)
      .then(profile => {
        this.selectedUser = profile;
        this.status = 'SAVED';
      })
      .catch(() => {
        this.status = 'ERROR';
      });
  ​}

  public get username(): string|null {
    if (this.​selectedUser) {
      return this.​selectedUser.username;
    }
    return null;
  }
  public set username(value: string) {
    if (this.​selectedUser) {
      this.​selectedUser.username = value;
      this.status = 'LOADED';
    }
  }

  public get saveDisabled() {
    return this.usernameDisabled || this.status === 'SAVED';
  }

  public get usernameDisabled() {
    return !this.selectedUser || !['LOADED', 'SAVED', 'ERROR'].includes(this.status);
  }
}
