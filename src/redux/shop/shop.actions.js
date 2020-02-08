import ShopActionTypes from './shop.action.types';
import {firestore, convertCollectionsSnapshotToCollectionObj} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});
export const fetchCollectionsFaliure = (error) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
  payload: error,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());
    collectionRef
        .get()
        .then((snapshot) => {
          console.log(snapshot);
          const collectionsObject = convertCollectionsSnapshotToCollectionObj(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsObject));
        })
        .catch((err) => dispatch(fetchCollectionsFaliure(err.message)));
  };
};


