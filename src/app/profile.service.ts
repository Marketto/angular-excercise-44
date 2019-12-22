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
        ​age: ​30
      };
    }​, ​3000​)​;
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
      });
    });
  }
}
