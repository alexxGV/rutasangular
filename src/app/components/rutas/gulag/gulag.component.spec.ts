import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GulagComponent } from './gulag.component';

describe('GulagComponent', () => {
  let component: GulagComponent;
  let fixture: ComponentFixture<GulagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GulagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GulagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
