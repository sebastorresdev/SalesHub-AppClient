import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [
    CardModule,
    CommonModule,
  ],
  templateUrl: './card-info.component.html',
})
export class CardInfoComponent {
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

}
