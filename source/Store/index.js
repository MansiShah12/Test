import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import reducer from '../Reducers'
import rootSaga from '../Saga'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [ 'userReducer' ],
}
  
const persistedReducer = persistReducer(persistConfig, reducer)
const sagaMiddleware = createSagaMiddleware();
export default function configureStore(onCompletion) {
    const enhancer = compose(
        applyMiddleware(
            sagaMiddleware,
        ),
    );
    const store = createStore(persistedReducer, enhancer);
    sagaMiddleware.run(rootSaga);
    let persistor = persistStore(store,onCompletion)
    return { store, persistor }
}

