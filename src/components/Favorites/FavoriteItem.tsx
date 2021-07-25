import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => (
  <Card style={{ marginBottom: '1rem' }}>
    <div className="favorite-item">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Card>
);

export default FavoriteItem;