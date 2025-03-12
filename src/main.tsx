import React from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"

import App from "./App"
import { store } from "./app/store"

// skip mock API setup

const root = createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
