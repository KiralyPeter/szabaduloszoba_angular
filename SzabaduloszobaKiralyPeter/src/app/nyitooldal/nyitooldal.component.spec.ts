import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyitooldalComponent } from './nyitooldal.component';

describe('NyitooldalComponent', () => {
  let component: NyitooldalComponent;
  let fixture: ComponentFixture<NyitooldalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NyitooldalComponent]
    });
    fixture = TestBed.createComponent(NyitooldalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
