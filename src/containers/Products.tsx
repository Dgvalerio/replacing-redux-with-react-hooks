import React, { FC, useContext } from 'react';

import ProductItem from '../components/Products/ProductItem';
import { ProductsContext } from '../context/products-context';
import { IProduct } from '../types/interfaces';
import './Products.css';

const Products: FC = () => {
  const { products: productList } = useContext(ProductsContext);

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
