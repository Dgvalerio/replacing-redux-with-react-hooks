import React, { useContext } from 'react';

import { ProductsContext } from '../../context/products-context';
import { IProduct } from '../../types/interfaces';
import Card from '../UI/Card';
import './ProductItem.css';

const ProductItem = ({
  id,
  isFavorite,
  description,
  title,
}: IProduct): JSX.Element => {
  const { toggleFav } = useContext(ProductsContext);

  const toggleFavHandler = () => toggleFav(id);

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
};

export default ProductItem;
