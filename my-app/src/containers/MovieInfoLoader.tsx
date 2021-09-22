import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import MovieInfoForm from '../components/MovieInfoForm';
import MovieDetail from '../components/MovieDetail';
import { getMovieInfoThunk } from '../modules/movie';

function MovieInfoLoader() {
  const { data, loading, error } = useSelector((state: RootState) => state.movie.movieInfo);
  const dispatch = useDispatch();

  const onSubmitMoviename = (moviename: string) => {
    dispatch(getMovieInfoThunk(moviename));
  };

  return (
    <>
      <MovieInfoForm onSubmitMoviename={onSubmitMoviename} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중..</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!</p>}
      {data && <MovieDetail title={data.items.title} thumbnail={data.items.image} subtitle={data.items.subtitle} userRating={data.items.userRating} />}
    </>
  );
}

export default MovieInfoLoader;