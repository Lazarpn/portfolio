import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

import { IconComponent } from '../icon/icon.component';
import { LaddaModule } from '../ladda/ladda.module';

@Component({
  selector: 'pt-button',
  standalone: true,
  imports: [IconComponent, LaddaModule],
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss'],
})
export class ButtonComponent {
  @Input()
  @HostBinding('class')
  color: string = 'primary';

  @Input() iconName: string;
  @Input() iconColor: 'alt' | 'default' | 'accent' | 'white';
  @Input() iconOnly: boolean;
  @Input() iconSize: number;
  @Input() iconVariant: number;
  @Input() type: string;
  @Input() isLoading = false;
  @Input() disabled = false;

  @Output() buttonClick = new EventEmitter<MouseEvent>();
}
