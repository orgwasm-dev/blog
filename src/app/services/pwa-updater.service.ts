import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class PwaUpdaterService {

  constructor(private swUpdate: SwUpdate) {
    swUpdate.available.subscribe(event => {
      if (this.userWantsUpdate()) {
        window.location.reload();
      }
    });
  }

  private userWantsUpdate(): boolean {
    return false;
  }
}
