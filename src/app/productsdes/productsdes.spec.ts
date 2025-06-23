import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productsdes } from './productsdes';

describe('Productsdes', () => {
  let component: Productsdes;
  let fixture: ComponentFixture<Productsdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productsdes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productsdes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
