import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { MovieInfo } from '../../api/Movie';

export type MovieAction = ActionType<typeof actions>;

export type MovieState = {
  movieInfo: {
    loading: boolean;
    error: Error | null;
    data: MovieInfo | null;
  };
};