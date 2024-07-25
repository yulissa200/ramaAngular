import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantUsuarioComponent } from './mant-usuario.component';

describe('MantUsuarioComponent', () => {
  let component: MantUsuarioComponent;
  let fixture: ComponentFixture<MantUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantUsuarioComponent]
    });
    fixture = TestBed.createComponent(MantUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
