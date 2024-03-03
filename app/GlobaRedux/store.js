// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define your initial state
const initialState = {
  data1: [],
  data2: [],
  data3: [],
  data4:[],
  favFilms:[],
  status: 'idle',
  error: null,
};


const API_KEY = "0f3cda79a6da992572e3077bf0e8e329";
const API_POPULAR_URL = "https://api.themoviedb.org/3/movie/popular";
const baseUrl = "https://api.themoviedb.org/3/search/movie";

export const fetchPopularMovieData = createAsyncThunk('data1/fetchPopularMovieData', async () => {
  try {
    const response = await axios.get(API_POPULAR_URL, {
      params: {
        api_key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    // Handle error, if any
    throw error;
  }
});

export const fetchSearchMovieData = createAsyncThunk('data2/fetchSearchMovieData', async (query) => {
    try {
      const response = await axios.get(`${baseUrl}?query=${query}&api_key=${API_KEY}`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data;
    } catch (error) {
      // Handle error, if any
      throw error;
    }
  });



export const fetchMovieDetailsData = createAsyncThunk('data3/fetchMovieDetailsData', async (movieId) => {

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: API_KEY
          }
        });
        return response.data;
      } catch (error) {
        // Handle error, if any
        throw error;
      }
});

export const addFavratMovie = createAsyncThunk('data4/addFavratMovie', async (movieId) => {

  try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data;
    } catch (error) {
      // Handle error, if any
      throw error;
    }
});



// Define your slice
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularMovieData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPopularMovieData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data1 = action.payload;
      })
      .addCase(fetchPopularMovieData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSearchMovieData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearchMovieData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data2 = action.payload;
      })
      .addCase(fetchSearchMovieData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieDetailsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetailsData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data3 = action.payload;
      })
      .addCase(fetchMovieDetailsData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addFavratMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addFavratMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data4.push(action.payload)
        state.favFilms.push(action.payload)
      })
      .addCase(addFavratMovie.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const rootReducer = combineReducers({
  data: dataSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
