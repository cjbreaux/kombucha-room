import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoochComponent } from './edit-booch.component';

describe('EditBoochComponent', () => {
  let component: EditBoochComponent;
  let fixture: ComponentFixture<EditBoochComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBoochComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBoochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
