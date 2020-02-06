import ShopActionTypes from './shop.action.types';

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
