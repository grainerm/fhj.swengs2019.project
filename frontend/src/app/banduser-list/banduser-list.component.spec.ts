import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanduserListComponent } from './banduser-list.component';

describe('BanduserListComponent', () => {
  let component: BanduserListComponent;
  let fixture: ComponentFixture<BanduserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanduserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanduserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
