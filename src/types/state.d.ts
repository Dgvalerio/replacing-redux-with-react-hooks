import 'react-redux';
import { IProductsState } from './interfaces';

declare module 'react-redux' {
  export interface DefaultRootState {
    shop: IProductsState;
  }
}
