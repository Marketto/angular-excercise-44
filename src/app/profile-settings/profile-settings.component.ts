import { Component, OnInit } from 'angular-ts-decorators';
import { ProfileService } from '../profile.service';
import { ISelectedUser } from '../selectedUser.interface';

@Component({
  selector: 'app-profile-settings',
  template: require('./profile-settings.component.html'),
  styles: [ require('./profile-settings.component.scss') ]
})
export class ProfileSettingsComponent implements OnInit {
  ​public ​selectedUser: ISelectedUser;
  ​public ​title: string​;

  /*@ngInject*/
  constructor(private profileService: ProfileService) { }

  ngOnInit() {

  }

  ​public saveProfile() {
  ​}
}
