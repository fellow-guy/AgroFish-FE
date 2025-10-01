import { Component } from '@angular/core';
import { TProduct } from '../../shared/types/product.type';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../../shared/components/product-item/product-item.component';
import { faChevronLeft, faChevronRight, faShare } from '@fortawesome/pro-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, CarouselModule, ProductItemComponent, FontAwesomeModule, NgbPopoverModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: TProduct = {
    name: 'Product Name 1',
    description: 'Small description of a product',
    images: ['assets/images/png/products/product_1.png', 'assets/images/png/products/product_2.png', 'assets/images/png/products/product_3.png'],
    category: {
      name: 'Category #1',
      tag: 'c1',
      active: false
    },
    price: 99.99,
    longDescription: 'Enjoy the delicate sweetness of Chilean Sea Bass, sourced from sustainable fisheries. Our skin-on fillets are perfect for grilling, baking, or pan-searing.',
    link: 'prod_1'
  };

  productList: TProduct[] = [
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false,
    autoWidth: false,
    autoHeight: false,
    lazyLoad: true,
    dotsData: false,
    dotsEach: false,
    autoplay: true,
    autoplaySpeed: 800,
    center: false,
    mergeFit: false,
    merge: false
  };

  showcaseImage: string = "";

  faShare = faShare;
  faPrev = faChevronLeft;
  faNext = faChevronRight;

  ngOnInit(): void {
    this.showcaseImage = this.product.images[0];
  }

  nextImage(): void {
    let currentImageIndex = this.product.images.indexOf(this.showcaseImage);
    if(currentImageIndex + 1 < this.product.images.length){
      this.showcaseImage = this.product.images[currentImageIndex + 1];
    } else {
      this.showcaseImage = this.product.images[0];
    }
  }

  prevImage(): void {
    let currentImageIndex = this.product.images.indexOf(this.showcaseImage);
    if(currentImageIndex - 1 < 0){
      this.showcaseImage = this.product.images[this.product.images.length - 1];
    } else {
      this.showcaseImage = this.product.images[currentImageIndex - 1];
    }
  }

  copyLink(): void {
    navigator.clipboard.writeText(window.location.href);
  }
}
