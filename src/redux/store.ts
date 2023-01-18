import { configureStore } from "@reduxjs/toolkit";
import { all, fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import watchCommonSaga from "./sagas/watchCommonSaga";
import rootReducer from "./slices";

function* RootSaga() {
  yield all([fork(watchCommonSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(RootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
