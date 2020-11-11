import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablamutltiplicarComponent } from './tablamutltiplicar.component';

describe('TablamutltiplicarComponent', () => {
  let component: TablamutltiplicarComponent;
  let fixture: ComponentFixture<TablamutltiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablamutltiplicarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablamutltiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
