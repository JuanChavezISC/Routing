import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacDetailsComponent } from './contac-details.component';

describe('ContacDetailsComponent', () => {
  let component: ContacDetailsComponent;
  let fixture: ComponentFixture<ContacDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
