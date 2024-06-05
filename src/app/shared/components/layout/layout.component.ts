import { Component } from '@angular/core';

import { SidebarModule } from 'primeng/sidebar';
import { NavMenuComponent } from '../nav-menu/nav-menu.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
export class LayoutComponent {
  isCollapsed: boolean = false;

  handleMenuClick(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
