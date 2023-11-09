import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageComponent } from './webpage.component';

describe('WebpageComponent', () => {
  let component: WebpageComponent;
  let fixture: ComponentFixture<WebpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebpageComponent]
    });
    fixture = TestBed.createComponent(WebpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
