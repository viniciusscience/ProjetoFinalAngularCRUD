import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContabancoComponent } from './contabanco.component';

describe('ContabancoComponent', () => {
  let component: ContabancoComponent;
  let fixture: ComponentFixture<ContabancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContabancoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContabancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
