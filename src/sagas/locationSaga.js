import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../store/api';
import { FETCH_LOCATION_DATA, FETCH_LOCATION_DATA_FAILED, FETCH_LOCATION_DATA_SUCCESSFUL  } from '../actions/actionTypes';

function* fetchLocationAsync(action) {
 try {
   const { lat, lon } = action.payload;
  const result = yield call(() => api.fetchLocation({ lat, lon }).then(response => response.data))
  yield put({
   type: FETCH_LOCATION_DATA_SUCCESSFUL,
   payload: {
    locationData: result.features[0].properties.address
   }
  });
 }
 catch (error) {
  yield put({
   type: FETCH_LOCATION_DATA_FAILED,
   payload: {
    error
   }
  })
 }
}

export function* watchFetchLocation() {
 yield takeLatest(FETCH_LOCATION_DATA, fetchLocationAsync)
}