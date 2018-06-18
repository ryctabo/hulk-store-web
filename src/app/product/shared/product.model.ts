import { Category } from '../../category/shared/category.model';

export interface Product {
  id?: number;
  name: string;
  price: number;
  category: Category;
  created?: Date | string;
  updated?: Date | string;
}

export interface Stock {
  index?: number;
  type: 'INPUT' | 'OUTPUT';
  amount: number;
  message: string;
  created?: Date | string;
}
