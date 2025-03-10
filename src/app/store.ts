import { configureStore } from "@reduxjs/toolkit"
import type { Action } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

function counterReducer(state: CounterState = { value: 0 }, action: Action) {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer argument
  reducer: {
    //Declare that `state.counter` will be updated by the `counterReducer` function
    counter: counterReducer,
  },
})

// Infer the type of `store`
export type AppStore = typeof store
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>