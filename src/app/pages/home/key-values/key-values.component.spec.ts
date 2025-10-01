import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValuesComponent } from './key-values.component';

describe('KeyValuesComponent', () => {
  let component: KeyValuesComponent;
  let fixture: ComponentFixture<KeyValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
