import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() menuClicked: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.menuClicked.emit();
  }
}
