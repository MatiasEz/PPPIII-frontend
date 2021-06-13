import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListarCorreComponent } from './alumno-listar-corre.component';

describe('AlumnoListarCorreComponent', () => {
  let component: AlumnoListarCorreComponent;
  let fixture: ComponentFixture<AlumnoListarCorreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoListarCorreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListarCorreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
