import { NewBook } from "@/pages/book/model";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export interface Book {
  _id: string;
  title: string;
  image: string;
  author: string;
  price: number;
  description: string;
  category: string;
}

interface BookState {
  books: Book[];
  categories: string[];
  status: string;
  error: null | string | undefined;
}

const initialState: BookState = {
  books: [
    {
      _id: "",
      title: "Doraemon",
      image: "/image/neymar.jpeg",
      price: 10,
      author: "Nguyen Van A",
      category: "Fairy tale ",
      description: "asdasdasdadadsa",
    },
  ],
  categories: ["Adventure", "Classics", "Crime", "Fantasy"],
  status: "idle",
  error: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = state.books.filter((book) => book._id !== action.payload);
      })
      .addCase(deleteBook.rejected, (state, action) => {
        console.log("error");
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(editBook.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editBook.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.books = state.books.map((book) =>
          book._id === action.payload._id ? action.payload : book
        );
      })
      .addCase(editBook.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  try {
    const response = await axios.get("http://localhost:3001/books");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addBook = createAsyncThunk(
  "books/addBook",
  async (newBook: NewBook) => {
    try {
      const response = await axios.post("http://localhost:3001/books", newBook);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (bookId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/books/${bookId}`
      );
      return bookId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const editBook = createAsyncThunk(
  "books/editBook",
  async (editedBook: Book) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/books/${editedBook._id}`,
        editedBook
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

const bookReducer = bookSlice.reducer;

export default bookReducer;
