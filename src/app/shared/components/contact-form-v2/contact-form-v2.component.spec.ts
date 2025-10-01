import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormV2Component } from './contact-form-v2.component';

describe('ContactFormV2Component', () => {
  let component: ContactFormV2Component;
  let fixture: ComponentFixture<ContactFormV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactFormV2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactFormV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
