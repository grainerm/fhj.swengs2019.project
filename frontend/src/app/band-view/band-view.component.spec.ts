import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BandViewComponent } from './band-view.component';

describe('BandViewComponent', () => {
  let component: BandViewComponent;
  let fixture: ComponentFixture<BandViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
