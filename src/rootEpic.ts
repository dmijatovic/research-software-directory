import { combineEpics } from 'redux-observable';

import { fetchEpic } from './async';
import { epic as authEpic } from './auth/epic';
import { epic as imageEpic } from './images/epic';
import { epic as menuEpic } from './menu/epic';

export const rootEpic = combineEpics(fetchEpic, imageEpic, menuEpic, authEpic);
