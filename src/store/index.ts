// store/index.ts

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import usersReducer from './slices/usersSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof store.getState>
export default store
