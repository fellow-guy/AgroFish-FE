import { Component } from '@angular/core';
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-home-alt',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './home-alt.component.html',
  styleUrl: './home-alt.component.scss'
})
export class HomeAltComponent {

}
