import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommendations: null,
  newtodisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommendations = action.payload.recommendations;
      state.newtodisney = action.payload.newtodisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommendations = (state) => state.movie.recommendations;
export const selectNewToDisney = (state) => state.movie.newtodisney;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginal = (state) => state.movie.original;

export default movieSlice.reducer;
