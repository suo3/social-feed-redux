import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/app/store"
import { sub } from "date-fns"

export interface Alert {
  id: string
  title: string
  content: string
  variant: string
  user: string
  date: string
}

type AlertUpdate = Pick<Alert, "id" | "title" | "content" | "variant">

const initialState: Alert[] = [
  {
    id: "1",
    title: "First Alert!",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "success",
    user: "0",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: "2",
    title: "Second Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "danger",
    user: "2",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: "3",
    title: "Third Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "info",
    user: "3",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
  {
    id: "4",
    title: "Fourth Alert",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "primary",
    user: "4",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
]

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    alertAdded(state, action: PayloadAction<Alert>) {
      state.push(action.payload)
    },
    prepare(title: string, content: string, variant: string, userId: string) {
      return {
        payload: {
          id: nanoid(),
          title,
          content,
          variant,
          user: userId,
          date: new Date().toISOString(),
        },
      }
    },
    alertUpdated(state, action: PayloadAction<AlertUpdate>) {
      const { id, title, content, variant } = action.payload
      const existingAlert = state.find(alert => alert.id === id)
      if (existingAlert) {
        existingAlert.id = id
        existingAlert.title = title
        existingAlert.content = content
        existingAlert.variant = variant
      }
    },
  },
})

export const { alertAdded, alertUpdated } = alertsSlice.actions

export default alertsSlice.reducer

export const selectAllAlerts = (state: RootState) => state.alerts

export const selectAlertById = (state: RootState, alertId: string) =>
  state.alerts.find(alert => alert.id === alertId)
