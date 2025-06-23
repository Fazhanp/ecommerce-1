import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abtdes } from './abtdes';

describe('Abtdes', () => {
  let component: Abtdes;
  let fixture: ComponentFixture<Abtdes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abtdes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abtdes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
