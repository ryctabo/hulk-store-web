import { Category } from '../../category/shared/category.model';

export interface Product {
  id?: number;
  name: string;
  price: number;
  category: Category;
  created?: Date | string;
  updated?: Date | string;
}
