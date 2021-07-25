export const TOGGLE_FAV = 'TOGGLE_FAV';

export const toggleFav = (id: string): { productId: string; type: string } => ({
  type: TOGGLE_FAV,
  productId: id,
});
