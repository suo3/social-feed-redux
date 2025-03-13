import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AlertsList } from "./features/alerts/AlertsList"
import { AddAlertForm } from "./features/alerts/AddAlertForm"
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddAlertForm />
                <hr />
                <AlertsList />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
