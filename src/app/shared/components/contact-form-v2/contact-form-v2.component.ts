import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SendMailService } from '../../services/send-mail/send-mail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form-v2',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form-v2.component.html',
  styleUrl: './contact-form-v2.component.scss'
})
export class ContactFormV2Component {
  sent: boolean = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, [Validators.required]),
    subject: new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required]),
  })

  constructor(private sendMailService: SendMailService) {}

  sendForm(): void {
    if(this.contactForm.valid){
      this.sendMailService.postMessage(this.contactForm.value).subscribe(
        (response)=> {
          console.log('SEND', this.contactForm.get('email')?.value);
          this.contactForm.reset();
          this.sent = true;
          setTimeout(()=>{
            this.sent = false;
          }, 7500)
        },
        (error)=> {
          console.warn(error.responseText);
        }
      );
      
      return;
    }
    console.log('NO SEND')
  }
}
