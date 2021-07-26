import React, { FC, useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { ProductsContext } from '../context/products-context';
import { IProduct } from '../types/interfaces';
import './Products.css';

const Favorites: FC = () => {
  const favoriteProducts = useContext(ProductsContext).products.filter(
    (p) => p.isFavorite
  );

  let content = <p className="placeholder">Got no favorites yet!</p>;

  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map(({ id, title, description }: IProduct) => (
          <FavoriteItem key={id} title={title} description={description} />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
