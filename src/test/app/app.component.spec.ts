import {TestBed} from '@angular/core/testing';
import {AppComponent} from '@dynamic-forms/app/app.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
