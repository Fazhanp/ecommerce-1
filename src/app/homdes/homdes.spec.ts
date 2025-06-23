import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homdes } from './homdes';

describe('Homdes', () => {
  let component: Homdes;
  let fixture: ComponentFixture<Homdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homdes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homdes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
