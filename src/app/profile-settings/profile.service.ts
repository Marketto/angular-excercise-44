import { IPromise, IQService, ITimeoutService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { ISelectedUser } from './selectedUser.interface';

@Injectable('profileService')
export class ProfileService {
  public profileUser: ISelectedUser;

  /*@ngInject*/
  constructor(
    private $q: IQService,
    private $timeout: ITimeoutService
  ) {}

  public ​getProfileUser(): IPromise<ISelectedUser> {
    return this​.$timeout(() => {
      ​return this​.​profileUser ​= {
        ​first_name​: ​'Michael'​,
        ​last_name​: ​'Collins'​,
        ​username​: ​'michael.collins'​,
        user_email: null,
        ​age: ​30
      };
    }​, ​3000​)​;
  }

  public setProfile(username: string): IPromise<ISelectedUser> {
    return this​.$q((resolve​, ​reject) => {
      this.​setUsername(username)
        .then((profile) => {
          this.setUserEmail(`${profile.username}@bluface.com`)
            .then(resolve)
            .catch(() => reject(`Error on email generation!`));
        })
        .catch(({ error }) => reject(`Error! ${error}`));
    });
  }

  public ​setUsername(username: string): IPromise<ISelectedUser> {
    return this​.$q((resolve​, ​reject) => {
      ​this​.$timeout(() => {
        ​if ​(Math.​round​(Math.​random​())) {
          ​this​.​profileUser​.​username ​= username​;
          ​resolve(​this​.​profileUser​)​;
        ​} ​else ​{
          reject({ ​error​: ​'Invalid username' ​})​;
        ​}
      }, 3000);
    });
  }

  public setUserEmail(user_email: string): IPromise<ISelectedUser> {
    return this​.$q((resolve​, ​reject) => {
      ​this​.$timeout(() => {
        ​if ​(Math.​round​(Math.​random​())) {
          ​this​.​profileUser​.user_email ​= user_email;
          ​resolve(​this​.​profileUser​)​;
        ​} ​else ​{
          reject()​;
        ​}
      }, 3000);
    });
  }
}
