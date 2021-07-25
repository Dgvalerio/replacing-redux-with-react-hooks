import React, { CSSProperties, ReactNode } from 'react';

import './Card.css';

const Card = ({
  style,
  children,
}: {
  style: CSSProperties;
  children: ReactNode;
}): JSX.Element => (
  <div className="card" style={style}>
    {children}
  </div>
);

export default Card;
