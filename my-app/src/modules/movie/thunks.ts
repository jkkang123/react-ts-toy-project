import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { MovieAction } from './types';
import { getMovieInfo } from '../../api/Movie';
import { getMovieInfoAsync } from './actions';

export function getMovieInfoThunk(moviename: string): ThunkAction<void, RootState, null, MovieAction> {
  return async dispatch => {
    const { request, success, failure } = getMovieInfoAsync;
    dispatch(request());
    try {
      const movieInfo = await getMovieInfo(moviename);
      dispatch(success(movieInfo));
    } catch (e) {
      dispatch(failure(e));
    }
  };
}