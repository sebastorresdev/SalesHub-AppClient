// angular
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// proyecto
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [
    CommonModule,
    RouterModule,
    TopbarComponent,
    SidebarComponent
  ],
})
export class LayoutComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object, public layoutService: LayoutService) { }

  // mejorar esta parte
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.layoutService.updateInnerWidth(window.innerWidth >= 1024);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    console.log(window.innerWidth);
    if (typeof window !== 'undefined') {
      this.layoutService.updateInnerWidth(window.innerWidth >= 1024);
    }
  }
}
