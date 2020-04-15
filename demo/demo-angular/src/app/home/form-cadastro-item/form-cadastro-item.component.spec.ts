import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroItemComponent } from './form-cadastro-item.component';

describe('FormCadastroItemComponent', () => {
  let component: FormCadastroItemComponent;
  let fixture: ComponentFixture<FormCadastroItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCadastroItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
