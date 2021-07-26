import React, { FC } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { useStore } from '../hook-store/store';
import { IProduct, IProductsState } from '../types/interfaces';
import './Products.css';

const Products: FC = () => {
  const { products: productList }: IProductsState = useStore()[0];

  return (
    <ul className="products-list">
      {productList.map((p: IProduct) => (
        <ProductItem
          key={p.id}
          id={p.id}
          title={p.title}
          description={p.description}
          isFavorite={p.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
