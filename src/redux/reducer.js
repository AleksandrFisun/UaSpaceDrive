import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import advertsReducer from './adverts/advertsSlice';

const advertsPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: [''],
};

export const reducer = {
  adverts: persistReducer(advertsPersistConfig, advertsReducer),
};
