import { configureStore } from "@reduxjs/toolkit"
import alertsReducer from "../features/alerts/alertsSlice"
import usersReducer from "@/features/users/usersSlice"

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
    users: usersReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
