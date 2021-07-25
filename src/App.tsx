import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import FavoritesPage from './containers/Favorites';
import ProductsPage from './containers/Products';

const App: FC = () => (
  <>
    <Navigation />
    <main>
      <Route path="/" component={ProductsPage} exact />
      <Route path="/favorites" component={FavoritesPage} />
    </main>
  </>
);

export default App;
