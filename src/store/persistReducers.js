import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      // The name of the local storage
      key: 'gobarber',
      // The persist storage variable
      storage,
      // Modules that uses persistor
      whitelist: ['auth', 'user'],
    },
    // The reducers of the modules
    reducers
  );

  return persistedReducer;
};
