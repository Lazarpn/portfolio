import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { ButtonComponent } from '../shared/button/button.component';
import { TagComponent } from '../shared/components/tag/tag.component';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'pt-contact',
  imports: [ButtonComponent, TagComponent, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('name', { read: ElementRef }) name: ElementRef;
  @ViewChild('heading', { read: ElementRef }) heading: ElementRef;
  @ViewChild('info', { read: ElementRef }) info: ElementRef;
  @ViewChild('tagWrapper', { read: ElementRef }) tagWrapper: ElementRef;
  @ViewChild('buttonWrapper', { read: ElementRef }) buttonWrapper: ElementRef;

  constructor(private utilityService: UtilityService) { }

  ngAfterViewInit(): void {
    this.registerAnimations();
  }

  sendEmail() {
    window.location.href = 'mailto:lazarst.pn@gmail.com';
  }

  phoneContact() {
    window.location.href = 'tel:+381 61 29 87 606';
  }

  private registerAnimations() {
    this.utilityService.addFadeInAnimation(this.heading.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.info.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.tagWrapper.nativeElement, -500);
    this.utilityService.addFadeInAnimation(this.buttonWrapper.nativeElement, 500);
  }
}
