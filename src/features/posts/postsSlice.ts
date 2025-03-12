import { createSlice } from "@reduxjs/toolkit"

export interface Post {
  id: string
  title: string
  content: string
  variant: string
}

const initialState: Post[] = [
  {
    id: "1",
    title: "First Post!",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "success",
  },
  {
    id: "2",
    title: "Second Post",
    content:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
    variant: "info",
  },
]

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
})

// Export the generated reducer function
export default postsSlice.reducer
