import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarrerasComponent } from './list-carreras.component';

describe('ListCarrerasComponent', () => {
  let component: ListCarrerasComponent;
  let fixture: ComponentFixture<ListCarrerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCarrerasComponent]
    });
    fixture = TestBed.createComponent(ListCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
