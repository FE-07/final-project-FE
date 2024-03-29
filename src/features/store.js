import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
// import { Middleware } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store