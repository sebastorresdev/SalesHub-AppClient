import { Component } from '@angular/core';
// primeng
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  templateUrl: './topbar.component.html',
  imports: [
    ToolbarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule
  ],
})
export class TopbarComponent {

  constructor(public layoutService: LayoutService) {

  }
}
