import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PostsList } from "./features/posts/PostsList"
import { AddPostForm } from "./features/posts/AddPostForm"
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
                <AddPostForm />
                <hr />
                <PostsList />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
