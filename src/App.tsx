import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom"
import { AlertsMainPage } from "./features/alerts/AlertsMainPage"
import { SingleAlertPage } from "./features/alerts/SingleAlertPage"
import { MainNavBar } from "./features/alerts/Navbar"
import { EditAlertForm } from "./features/alerts/EditAlertForm"

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainNavBar />
        <Routes>
          <Route path="/" element={<AlertsMainPage />}></Route>
          <Route path="/alerts/:alertId" element={<SingleAlertPage />} />
          <Route path="/editAlert/:alertId" element={<EditAlertForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
