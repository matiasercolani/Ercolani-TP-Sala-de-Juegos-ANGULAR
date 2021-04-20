import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiJuegoComponent } from './mi-juego.component';

describe('MiJuegoComponent', () => {
  let component: MiJuegoComponent;
  let fixture: ComponentFixture<MiJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
