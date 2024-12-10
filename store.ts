import { Reducer, combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import AsyncStorage, { AsyncStorageStatic } from '@react-native-async-storage/async-storage'

//Reducers
import userStore from './src/reducers/user'

const persistConfig: PersistConfig<string, AsyncStorageStatic> = {
  key: 'root',
  storage: AsyncStorage,
}

const reducers = { userStore }

const rootReducers: Reducer = combineReducers(reducers)

const persistedReducer = persistReducer(persistConfig, rootReducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor = persistStore(store)