import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanduserFormComponent } from './banduser-form.component';

describe('BanduserFormComponent', () => {
  let component: BanduserFormComponent;
  let fixture: ComponentFixture<BanduserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanduserFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanduserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
