import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Book {
  id: string;
  title: string;
  image: string;
  category: string;
}

interface BookState {
  books: Book[],
  categories: string[]
}

const initialState: BookState = {
  books: [
    {
      id: "1",
      title: "Doraemon",
      image: "/image/neymar.jpeg",
      category: "Fairy tale "
    }
  ],
  categories: ["Fairy tale", "Myth", "Ghost story", "Comic",]
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook: Book = action.payload
      console.log(newBook)
      state.books.push(newBook)
    }
  },
});

const bookReducer = bookSlice.reducer;

export default bookReducer;
