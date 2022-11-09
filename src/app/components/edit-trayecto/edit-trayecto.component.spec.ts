import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrayectoComponent } from './edit-trayecto.component';

describe('EditTrayectoComponent', () => {
  let component: EditTrayectoComponent;
  let fixture: ComponentFixture<EditTrayectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrayectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
