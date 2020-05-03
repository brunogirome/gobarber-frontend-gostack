import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// Separated store configs for code clean and organization
import createStore from './createStore';
import persistReducers from './persistReducers';

// Kind of index for reducers and saga middlewares
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

// The monitor to work with Reactotron
const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;
// Creating the general saga monitor with the reactotron monitor to debug
// the application
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];
// Function exported from "createStore" file
const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);
// Running middlewares
sagaMiddleware.run(rootSaga);

export { store, persistor };
