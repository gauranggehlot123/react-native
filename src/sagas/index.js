import { all, fork } from 'redux-saga/effects';

import { watchFetchLocation } from './locationSaga';
import { watchFetchTemperature } from './temperatureSaga';

export function* rootSaga() {
 yield all([
  fork(watchFetchLocation),
  fork(watchFetchTemperature),
 ]);
};