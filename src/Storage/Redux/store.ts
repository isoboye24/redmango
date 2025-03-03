import { configureStore } from '@reduxjs/toolkit';
import { menuItemReducer, menuItemSlice } from './menuItemSlice';
import { menuItemApi, shoppingCartApi } from '../../APIs';

const store = configureStore({
  reducer: {
    menuItemStore: menuItemReducer,
    [menuItemApi.reducerPath]: menuItemApi.reducer,
    [shoppingCartApi.reducerPath]: shoppingCartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(menuItemApi.middleware)
      .concat(shoppingCartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
