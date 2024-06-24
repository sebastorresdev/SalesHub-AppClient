import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// proyecto
import { LayoutComponent } from './shared/layout/layout.component';
// primeng
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    LayoutComponent,
  ],
})
export class AppComponent implements OnInit {
  title = 'SalesHubAppClient';

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.primengConfig.zIndex = {
      modal: 1100,    // dialog, sidebar
      overlay: 1000,  // dropdown, overlaypanel
      menu: 1000,     // overlay menus
      tooltip: 1100   // tooltip
    };
  }
}
