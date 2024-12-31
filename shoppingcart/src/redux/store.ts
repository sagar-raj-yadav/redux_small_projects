import { configureStore } from '@reduxjs/toolkit'
import createslice from './cartslice.ts';

export const store = configureStore({
  reducer: {
    cart:createslice
  },
})

export type RootStore  = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch