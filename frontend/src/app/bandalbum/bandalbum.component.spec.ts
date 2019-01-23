import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandalbumComponent } from './bandalbum.component';

describe('BandalbumComponent', () => {
  let component: BandalbumComponent;
  let fixture: ComponentFixture<BandalbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandalbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
