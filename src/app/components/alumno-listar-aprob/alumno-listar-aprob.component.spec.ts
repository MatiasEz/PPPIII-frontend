import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListarAprobComponent } from './alumno-listar-aprob.component';

describe('AlumnoListarAprobComponent', () => {
  let component: AlumnoListarAprobComponent;
  let fixture: ComponentFixture<AlumnoListarAprobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoListarAprobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListarAprobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
