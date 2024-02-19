import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import  {thunk }  from 'redux-thunk';
import rootReducer from "../reducer/rootReducer";


// Configuration for Redux Persist
const persistConfig = {
    key: 'root',
    storage,
  };

// Wrap your root reducer with the Redux Persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    // middleware : [thunk],
})

// Create the persisted version of the store
export const persistor = persistStore(store);

export default store;