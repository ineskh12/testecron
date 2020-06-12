import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestecronComponent } from './testecron.component';

describe('TestecronComponent', () => {
  let component: TestecronComponent;
  let fixture: ComponentFixture<TestecronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestecronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestecronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
