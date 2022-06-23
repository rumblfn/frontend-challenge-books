import { currentBookReducer } from './reducers/currentBook';
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { booksReducer } from "./reducers/booksReducer";
import { paramsReducer } from "./reducers/appParamsReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ 
  books: booksReducer,
  params: paramsReducer,
  currentBook: currentBookReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>
export default store;
