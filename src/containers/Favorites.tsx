import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { IProduct } from '../types/interfaces';
import './Products.css';

const Favorites: FC = () => {
  const favoriteProducts = useSelector((state) =>
    state.shop.products.filter((p) => p.isFavorite)
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
