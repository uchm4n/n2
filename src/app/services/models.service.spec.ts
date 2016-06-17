import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ModelsService } from './models.service';

describe('Models Service', () => {
  beforeEachProviders(() => [ModelsService]);

  it('should ...',
      inject([ModelsService], (service: ModelsService) => {
    expect(service).toBeTruthy();
  }));
});
