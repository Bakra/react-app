import { createStore, applyMiddleware, compose } from 'redux'
// import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../root-reducer';
import rootSaga from '../root-saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga)

export default store;