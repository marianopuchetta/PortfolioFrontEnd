import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoriaEducativaComponent } from './trayectoria-educativa.component';

describe('TrayectoriaEducativaComponent', () => {
  let component: TrayectoriaEducativaComponent;
  let fixture: ComponentFixture<TrayectoriaEducativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayectoriaEducativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrayectoriaEducativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
