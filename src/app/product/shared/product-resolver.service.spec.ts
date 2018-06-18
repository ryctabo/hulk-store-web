import { TestBed, inject } from '@angular/core/testing';
import { ProductResolver } from './product-resolver.service';

describe('ProductResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolver]
    });
  });

  it('should be created', inject([ProductResolver], (service: ProductResolver) => {
    expect(service).toBeTruthy();
  }));
});
