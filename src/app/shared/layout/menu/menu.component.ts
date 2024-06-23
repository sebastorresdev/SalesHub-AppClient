// angular
import { Component, OnInit } from '@angular/core';
// proyecto
import { MenuService } from './menu.service';
// primeng
import { MenuItem } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../layout.service';


@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  imports: [
    TooltipModule,
    RouterModule,
    CommonModule
  ],
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];
  isCollapsed = false;

  constructor(private _menuService: MenuService, public layoutSevices: LayoutService) {
  }
  ngOnInit(): void {
    this._menuService.getMenuItems().subscribe((data) => {
      data.map(e => {
        const menuItem: MenuItem = {
          label: e.name,
          icon: e.icon,
          routerLink: e.url
        };

        this.menuItems.push(menuItem);
      })
    })
  }
}
