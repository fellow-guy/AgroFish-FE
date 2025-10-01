import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MapComponent } from '../../../shared/components/map/map.component';
import { ContactFormV2Component } from '../../../shared/components/contact-form-v2/contact-form-v2.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ContactFormV2Component, MapComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
