import { configureStore } from '@reduxjs/toolkit'
import cartreducer from './cartreducer'
import userReducer from './userReducer'
export default configureStore({
  reducer: {
    cart: cartreducer,
    user: userReducer,
  }
})