import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // tmp
  menuItems: MenuItem[] = [];

  constructor(private http: HttpClient) { }

  // getMenuItems(): Observable<MenuItem[]> {
  //   return this.http.get<MenuItem[]>("");
  // }

  getMenuItems() {
    this.menuItems = [
      { label: "Dashboard", icon: "pi pi-gauge", routerLink: "dashboard" },
      { label: "Usuarios", icon: "pi pi-users", routerLink: "usuarios" },
      { label: "Productos", icon: "pi pi-th-large", routerLink: "productos" },
      { label: "Ventas", icon: "pi pi-shopping-cart", routerLink: "ventas" },
      { label: "Historial ventas", icon: "pi pi-chart-line", routerLink: "historial-ventas" },
      { label: "Reportes", icon: "pi pi-file-check", routerLink: "reportes" },

    ]
    return this.menuItems;
  }
}
