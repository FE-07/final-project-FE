import { configureStore } from '@reduxjs/toolkit'
import campaignReducer from './campaignSlice'
import userSlice from './userSlice'
// import { Middleware } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        campaign: campaignReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store