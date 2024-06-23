// angular
import { Component } from '@angular/core';
// proyecto
import { MenuComponent } from '../menu/menu.component';
import { LayoutService } from '../layout.service';
import { CommonModule } from '@angular/common';
// primeng
import { SidebarModule } from 'primeng/sidebar';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule,
    SidebarModule
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  constructor(public layoutService: LayoutService) { }
}
