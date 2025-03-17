import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AlertsMainPage } from "./features/alerts/AlertsMainPage"
import { SingleAlertPage } from "./features/alerts/SingleAlertPage"
import { MainNavBar } from "./features/alerts/Navbar"

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainNavBar />
        <Routes>
          <Route path="/" element={<AlertsMainPage />}></Route>
          <Route path="/alerts/:alertId" element={<SingleAlertPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
