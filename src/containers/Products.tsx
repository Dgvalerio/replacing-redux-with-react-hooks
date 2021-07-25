import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { IProduct } from '../types/interfaces';

const Products: FC = () => {
  const productList = useSelector((state) => state.shop.products);

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
