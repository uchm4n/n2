import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { N2bAppComponent } from '../app/n2b.component';

beforeEachProviders(() => [N2bAppComponent]);

describe('App: N2b', () => {
  it('should create the app',
      inject([N2bAppComponent], (app: N2bAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'n2b works!\'',
      inject([N2bAppComponent], (app: N2bAppComponent) => {
    expect(app.title).toEqual('n2b works!');
  }));
});
