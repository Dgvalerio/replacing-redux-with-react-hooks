import { IProduct } from '../types/interfaces';
import { initStore } from './store';

const configureStore = (): void => {
  const actions = {
    toggle_fav: (currentState: { products: IProduct[] }, productId: string) => {
      const prodIndex = currentState.products.findIndex(
        (p) => p.id === productId
      );
      const newFavStatus = !currentState.products[prodIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[prodIndex] = {
        ...currentState.products[prodIndex],
        isFavorite: newFavStatus,
      };

      return {
        products: currentState.products,
      };
    },
  };

  initStore(actions, {
    products: [
      {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false,
      },
      {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false,
      },
      {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false,
      },
      {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false,
      },
    ],
  });
};

export default configureStore;