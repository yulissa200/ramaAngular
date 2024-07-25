import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProvedoresComponent } from './listar-provedores.component';

describe('ListarProvedoresComponent', () => {
  let component: ListarProvedoresComponent;
  let fixture: ComponentFixture<ListarProvedoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProvedoresComponent]
    });
    fixture = TestBed.createComponent(ListarProvedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
