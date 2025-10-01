import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (scrollPosition >= 50) {
          this.isSticky = true;
      } else {
          this.isSticky = false;
      }
  }

  classApplied = false;
  toggleClass() {
      this.classApplied = !this.classApplied;
  }
}
