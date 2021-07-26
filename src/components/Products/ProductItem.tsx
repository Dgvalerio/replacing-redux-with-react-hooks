import React, { memo } from 'react';

import { useStore } from '../../hook-store/store';
import { IProduct } from '../../types/interfaces';
import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = memo(
  ({ id, isFavorite, description, title }: IProduct): JSX.Element => {
    const dispatch = useStore(false)[1];

    const toggleFavHandler = () => dispatch('toggleFav', id);

    return (
      <Card style={{ marginBottom: '1rem' }}>
        <div className="product-item">
          <h2 className={isFavorite ? 'is-fav' : ''}>{title}</h2>
          <p>{description}</p>
          <button
            type="button"
            className={!isFavorite ? 'button-outline' : ''}
            onClick={toggleFavHandler}
          >
            {isFavorite ? 'Un-Favorite' : 'Favorite'}
          </button>
        </div>
      </Card>
    );
  }
);

export default ProductItem;
