import { Component, Input } from '@angular/core';
import { TProduct } from '../../types/product.type';
import { CommonModule } from '@angular/common';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss'
})
export class ProductItemComponent {
  @Input() product!: TProduct;
  @Input() detailed: boolean = false;
  leftIcon = faChevronRight;
}
