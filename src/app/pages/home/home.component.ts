import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { KeyValuesComponent } from './key-values/key-values.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { faFish } from '@fortawesome/pro-regular-svg-icons';
import { TCategory } from '../../shared/types/category.type';
import { TProduct } from '../../shared/types/product.type';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent, ProductsComponent,KeyValuesComponent, ContactUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faFish= faFish;
  seaFoodCategoryList: TCategory[] = [
    {
      name: 'Category #1',
      tag: 'c1',
      active: false
    },
    {
      name: 'Category #2',
      tag: 'c2',
      active: false
    },
    {
      name: 'Category #3',
      tag: 'c3',
      active: false
    },
    {
      name: 'Category #4',
      tag: 'c4',
      active: false
    }
  ];
  seaFoodProductList: TProduct[] = [
    {
      name: 'Product Name 1',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #1',
        tag: 'c1',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_1'
    },
    {
      name: 'Product Name 2',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #1',
        tag: 'c1',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_2'
    },
    {
      name: 'Product Name 3',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #4',
        tag: 'c4',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_3'
    },
    {
      name: 'Product Name 4',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #4',
        tag: 'c4',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_4'
    },
    {
      name: 'Product Name 5',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #3',
        tag: 'c3',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_5'
    },
    {
      name: 'Product Name 6',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #3',
        tag: 'c3',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_6'
    },
    {
      name: 'Product Name 7',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #2',
        tag: 'c2',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_7'
    },
    {
      name: 'Product Name 8',
      description: 'Small description of a product',
      images: ['assets/images/png/products/product_1.png'],
      category: {
        name: 'Category #2',
        tag: 'c2',
        active: false
      },
      price: 99.99,
      longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
      link: 'prod_8'
    }
  ];
}
