import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAltComponent } from './footer-alt.component';

describe('FooterAltComponent', () => {
  let component: FooterAltComponent;
  let fixture: ComponentFixture<FooterAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
