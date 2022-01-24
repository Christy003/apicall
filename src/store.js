import rootreducer from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
 import rootSaga from "./sagas/index";
// import user from "./sagas/saga";
const sagaMiddleware=createSagaMiddleware();
const store = createStore(rootreducer,applyMiddleware(sagaMiddleware));

export default store;
sagaMiddleware.run(rootSaga)