import { createAsyncAction } from 'typesafe-actions';
import { MovieInfo } from '../../api/Movie';
import { AxiosError } from 'axios';

export const GET_MOVIE_INFO = 'movie/GET_MOVIE_INFO';
export const GET_MOVIE_INFO_SUCCESS = 'movie/GET_MOVIE_INFO_SUCCESS';
export const GET_MOVIE_INFO_ERROR = 'movie/GET_MOVIE_INFO_ERROR';

export const getMovieInfoAsync = createAsyncAction(
    GET_MOVIE_INFO,
    GET_MOVIE_INFO_SUCCESS,
    GET_MOVIE_INFO_ERROR
)<undefined, MovieInfo, AxiosError>();