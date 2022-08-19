import {TestBed} from '@angular/core/testing';
import {DividerComponent} from "@dynamic-forms/components/divider/divider.component";

describe('DividerComponent', () => {
  it('should create DividerComponent', () => {
    const fixture = TestBed.createComponent(DividerComponent);
    const dividerComponent = fixture.componentInstance;
    expect(dividerComponent).toBeTruthy();
    expect(dividerComponent.width).toEqual('50%');
  });
});
