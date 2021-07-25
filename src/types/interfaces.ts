export interface IProductsState {
  products: IProduct[];
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  isFavorite: boolean;
}
