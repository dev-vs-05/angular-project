import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentsAndDatabindingComponent } from './angular-components-and-databinding.component';

describe('AngularComponentsAndDatabindingComponent', () => {
  let component: AngularComponentsAndDatabindingComponent;
  let fixture: ComponentFixture<AngularComponentsAndDatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponentsAndDatabindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularComponentsAndDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
