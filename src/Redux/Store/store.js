import { createStore,combineReducers,applyMiddleware } from 'redux';
import { persistReducer, persistStore } from "redux-persist";
import reducer1 from '../Page1/reducer'
import reducer2 from '../Page2/reducer'
import reducer3 from '../Page3/reducer';
import storage from "redux-persist/lib/storage";

import rootSaga from "./saga"
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['color', 'header'] //  will be persisted
 };

 const reducers = combineReducers({reducer1,reducer2,reducer3});

 const store = createStore(
  persistReducer(persistConfig, reducers),
  applyMiddleware(sagaMiddleware)
);


sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export{ persistor};
export default  store ;