import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { TCategory } from '../../../shared/types/category.type';
import { TProduct } from '../../../shared/types/product.type';
import { faChevronLeft, faChevronRight, faFish } from '@fortawesome/pro-regular-svg-icons';
import { IconDefinition } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductItemComponent } from '../../../shared/components/product-item/product-item.component';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ProductItemComponent, CarouselModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() productType: string = 'seafood-products';
  @Input() title: string = 'Title';
  @Input() description: string = 'Detail';
  @Input() categoryList: TCategory[] = [];
  @Input() productList: TProduct[] = [];
  ogProductList: TProduct[] = [];
  @Input() buttonText: string = "Button";
  @Input() buttonIcon: IconDefinition = faFish;

  @ViewChild(CarouselComponent) carousel!:CarouselComponent;

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
        items: 4
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
  }

  rightIcon = faChevronLeft;
  leftIcon = faChevronRight;

  ngAfterViewInit(): void {
    this.ogProductList = this.productList;
  }

  moveRight(): void {
    this.carousel?.prev();
  }

  moveLeft(): void {
    this.carousel?.next();
  }

  setCategoryActive(tag: string): void {
    this.categoryList.forEach(category => {
      category.active = false;
    });
    let category = this.categoryList.find(x => x.tag == tag);
    if(category){
      category.active = !category.active;
      if(category.active){
        this.productList = this.ogProductList.filter(x => x.category.tag == tag);
        if(this.productList.length == 0){
          this.productList = this.ogProductList;
          category.active = false;
        }

        console.log(this.carousel.slides)
        if(this.productList.length < this.carousel.slides.length){
          this.carousel.options.autoplay = false;
        } else {
          this.carousel.options.autoplay = true;
        }
      } else {
        this.productList = this.ogProductList;
        this.carousel.options.autoplay = true;
      }
    }
  }

  resetCategoryActive() {
    this.categoryList.forEach(category => {
      category.active = false;
    });
    this.productList = this.ogProductList;
    this.carousel.options.autoplay = true;
  }
}
