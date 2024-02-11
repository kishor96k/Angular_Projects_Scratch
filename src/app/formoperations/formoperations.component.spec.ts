import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormoperationsComponent } from './formoperations.component';

describe('FormoperationsComponent', () => {
  let component: FormoperationsComponent;
  let fixture: ComponentFixture<FormoperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormoperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
