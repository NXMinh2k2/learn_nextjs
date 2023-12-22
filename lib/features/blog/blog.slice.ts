import { createSlice } from "@reduxjs/toolkit";

interface BlogState {
  postId: string;
}

const initialState: BlogState = {
  postId: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

const blogReducer = blogSlice.reducer;

export default blogReducer;
