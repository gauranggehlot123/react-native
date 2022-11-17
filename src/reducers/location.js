import { FETCH_LOCATION_DATA_SUCCESSFUL } from '../actions/actionTypes';

const initialState = {
 data: null,
};

const location = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_LOCATION_DATA_SUCCESSFUL: {
   return {
    ...state,
    data: action.payload.locationData
   };
  }
  default: {
   return state;
  }
 }
};

export default location;