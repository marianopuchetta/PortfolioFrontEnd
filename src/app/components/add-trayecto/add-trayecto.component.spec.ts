import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrayectoComponent } from './add-trayecto.component';

describe('AddTrayectoComponent', () => {
  let component: AddTrayectoComponent;
  let fixture: ComponentFixture<AddTrayectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrayectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
