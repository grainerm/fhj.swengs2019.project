import {EventEmitter, Injectable, OnDestroy} from '@angular/core';

export enum OnlineStatusType {
  OFFLINE = 0,
  ONLINE = 1
}

@Injectable({
  providedIn: 'root'
})
export class OnlineStatusService implements OnDestroy {
  static EVENT_TYPE_ONLINE = 'online';
  static EVENT_TYPE_OFFLINE = 'offline';
  public status = new EventEmitter<OnlineStatusType>(true);

  constructor() {
    this.bind();

    window.addEventListener(OnlineStatusService.EVENT_TYPE_ONLINE, this.onOnline);
    window.addEventListener(OnlineStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
  }

  ngOnDestroy() {
    window.removeEventListener(OnlineStatusService.EVENT_TYPE_ONLINE, this.onOnline);
    window.removeEventListener(OnlineStatusService.EVENT_TYPE_OFFLINE, this.onOffline);
  }

  private bind() {
    this.onOnline = this.onOnline.bind(this);
    this.onOffline = this.onOffline.bind(this);
  }

  private onOnline() {
    this.status.emit(OnlineStatusType.ONLINE);
  }

  private onOffline() {
    this.status.emit(OnlineStatusType.OFFLINE);
  }
}
