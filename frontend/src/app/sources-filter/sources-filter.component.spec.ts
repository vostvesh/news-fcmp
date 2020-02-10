import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesFilterComponent } from './sources-filter.component';

describe('SourcesFilterComponent', () => {
  let component: SourcesFilterComponent;
  let fixture: ComponentFixture<SourcesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
