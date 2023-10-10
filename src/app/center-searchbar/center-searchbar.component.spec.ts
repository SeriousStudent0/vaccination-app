import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSearchbarComponent } from './center-searchbar.component';

describe('CenterSearchbarComponent', () => {
  let component: CenterSearchbarComponent;
  let fixture: ComponentFixture<CenterSearchbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterSearchbarComponent]
    });
    fixture = TestBed.createComponent(CenterSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
