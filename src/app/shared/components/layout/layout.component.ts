import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CommonModule,
    SidebarModule,
    NavMenuComponent,
    HeaderComponent,
    RouterModule,
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  isCollapsed: boolean = false;
  isTabletOrMobile: boolean = false;
  sidebarVisible: boolean = false;
  screenWidth: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this, this.screenWidth = window.innerWidth;
      this.updateScreemWidth();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.screenWidth = window.innerWidth;
      this.updateScreemWidth();
    }
  }

  updateScreemWidth() {
    if (this.screenWidth <= 768) {
      this.isTabletOrMobile = true;
      this.sidebarVisible = false;
    } else {
      this.isTabletOrMobile = false;
    }
  }

  handleMenuClick(): void {
    if (this.isTabletOrMobile) {
      this.sidebarVisible = true;
    } else {
      this.isCollapsed = !this.isCollapsed;
    }
  }

  onMessageEvent(event: boolean): void {
    this.sidebarVisible = event;
  }
}
