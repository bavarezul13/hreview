import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class LocationGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.paramMap.get('id');
    if (isNaN(id)) {
      console.log('invalid locationId');
      return false;
    }
    return true;
  }

  constructor() { }

}
