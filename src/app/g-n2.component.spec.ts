import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { GN2AppComponent } from '../app/g-n2.component';

beforeEachProviders(() => [GN2AppComponent]);

describe('App: GN2', () => {
  it('should create the app',
      inject([GN2AppComponent], (app: GN2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'g-n2 works!\'',
      inject([GN2AppComponent], (app: GN2AppComponent) => {
    expect(app.title).toEqual('g-n2 works!');
  }));
});
