import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Alert {
  id: string
  title: string
  content: string
  variant: string
}

const initialState: Alert[] = [
  {
    id: "1",
    title: "First Alert!",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "success",
  },
  {
    id: "2",
    title: "Second Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "danger",
  },
  {
    id: "3",
    title: "Third Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "info",
  },
  {
    id: "4",
    title: "Fourth Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "primary",
  },
]

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    alertAdded(state, action: PayloadAction<Alert>) {
      state.push(action.payload)
    },
  },
})

export const {alertAdded } = alertsSlice.actions

export default alertsSlice.reducer
