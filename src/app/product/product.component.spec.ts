import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from '../services/product.service';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ProductService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.getProductCollection(1, component.countPerPage);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a set number of products per page', () => {
    expect(component.productOptions.length === component.countPerPage).toBeTruthy();
  });

});
