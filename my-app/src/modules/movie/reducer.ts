import { createReducer } from 'typesafe-actions';
import { MovieState, MovieAction } from './types';
import { GET_MOVIE_INFO, GET_MOVIE_INFO_SUCCESS, GET_MOVIE_INFO_ERROR } from './actions';

const initialState: MovieState = {
  movieInfo: {
    loading: false,
    error: null,
    data: null
  }
};

const movie = createReducer<MovieState, MovieAction>(initialState, {
  [GET_MOVIE_INFO]: state => ({
    ...state,
    movieInfo: {
      loading: true,
      error: null,
      data: null
    }
  }),
  [GET_MOVIE_INFO_SUCCESS]: (state, action) => ({
    ...state,
    movieInfo: {
      loading: false,
      error: null,
      data: action.payload
    }
  }),
  [GET_MOVIE_INFO_ERROR]: (state, action) => ({
    ...state,
    movieInfo: {
      loading: false,
      error: action.payload,
      data: null
    }
  })
});

export default movie;