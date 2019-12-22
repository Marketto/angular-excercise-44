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
  public status: TProfileStatus;
  public errorMessage: string;

  /*@ngInject*/
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadProfile();
  }

  public loadProfile() {
    this.errorMessage = null;
    this.status = 'LOADING';
    this.profileService.getProfileUser()
      .then(profile => {
        this.selectedUser = profile;
        this.status = 'READY';
      })
      .catch(() => {
        this.status = 'ERROR';
      });
  }

  ​public saveProfile() {
    this.errorMessage = null;
    this.status = 'SAVING';
    this.profileService.setUsername(this.​selectedUser.username)
      .then(profile => {
        this.selectedUser = profile;
        this.status = 'READY';
      })
      .catch(({ error } = {}) => {
        this.status = 'ERROR';
        this.errorMessage = error;
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
      if (this.status === 'ERROR') {
        this.status = 'READY';
      }
      this.errorMessage = null;
    }
  }

  public get saveDisabled() {
    return this.usernameDisabled || this.status === 'SAVING';
  }

  public get usernameDisabled() {
    return !this.selectedUser || this.status === 'LOADING';
  }
}
