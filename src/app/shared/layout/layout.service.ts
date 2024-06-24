import { Injectable } from '@angular/core';

interface LayoutState {
  isSidebarVisible: boolean,
  isCollapsed: boolean,
  isDesktop: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  innerWidth: number = 0;
  state: LayoutState = {
    isSidebarVisible: false,
    isCollapsed: false,
    isDesktop: false,
  };
  screenWidth: number = 0;

  constructor() {

  }

  sideBarToogle(): void {
    if (this.state.isDesktop) {
      this.state.isCollapsed = !this.state.isCollapsed;
    }
    else {
      this.state.isCollapsed = false;
      this.state.isSidebarVisible = true;
    }
  }

  onSelectedOption() {
    if (!this.state.isDesktop)
      this.state.isSidebarVisible = false;
  }

  updateInnerWidth(isDesktop: boolean) {
    this.state.isDesktop = isDesktop;
  }
}
