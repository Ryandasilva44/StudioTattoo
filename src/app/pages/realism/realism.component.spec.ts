import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealismComponent } from './realism.component';

describe('RealismComponent', () => {
  let component: RealismComponent;
  let fixture: ComponentFixture<RealismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealismComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
