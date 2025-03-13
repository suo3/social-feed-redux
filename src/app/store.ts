import { configureStore } from "@reduxjs/toolkit"
import type { Action } from "@reduxjs/toolkit"
import alertsReducer from "../features/alerts/alertsSlice"

export const store = configureStore({
  reducer: {
    alerts: alertsReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>
