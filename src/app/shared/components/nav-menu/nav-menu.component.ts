import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TooltipModule } from 'primeng/tooltip';

import { RouterModule } from '@angular/router';

export interface MenuItem {
  label: string,
  icon: string,
  routerLink: string,
  menuItem?: MenuItem[]
}

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [
    CommonModule,
    TooltipModule,
    RouterModule,
  ],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {

  @Input() isCollapsed: boolean = false;
  @Output() messageEvent = new EventEmitter<boolean>();

  constructor() { }

  @Input() items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      { label: "Dashboard", icon: "#dashboard", routerLink: "dashboard" },
      { label: "Usuarios", icon: "#user", routerLink: "usuarios" },
      { label: "Productos", icon: "#product", routerLink: "productos" },
      { label: "Ventas", icon: "#sales", routerLink: "ventas" },
      { label: "Historial ventas", icon: "#history", routerLink: "historial-ventas" },
      { label: "Reportes", icon: "#report", routerLink: "reportes" },
    ]
  }

  selectedMenu(): void {
    this.messageEvent.emit(false);
  }

}
