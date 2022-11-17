import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../store/api';
import { FETCH_TEMPERATURE, FETCH_TEMPERATURE_FAILED, FETCH_TEMPERATURE_SUCCESSFUL  } from '../actions/actionTypes';

function* fetchTemperatureAsync(action) {
 try {
   const { city, countryCode } = action.payload;
  const result = yield call(() => api.fetchTemperature({ city, countryCode }).then(response => response.data))
  yield put({
   type: FETCH_TEMPERATURE_SUCCESSFUL,
   payload: {
    temperatureData: result.main.temp
   }
  });
 }
 catch (error) {
  yield put({
   type: FETCH_TEMPERATURE_FAILED,
   payload: {
    error
   }
  })
 }
}

export function* watchFetchTemperature() {
 yield takeLatest(FETCH_TEMPERATURE, fetchTemperatureAsync)
}