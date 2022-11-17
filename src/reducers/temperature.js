import { FETCH_TEMPERATURE_SUCCESSFUL } from '../actions/actionTypes';

const initialState = {
 temperature: null,
};

const temperature = (state = initialState, action) => {
 switch (action.type) {
  case FETCH_TEMPERATURE_SUCCESSFUL: {
   return {
    ...state,
    temperature: action.payload.temperatureData
   };
  }
  default: {
   return state;
  }
 }
};

export default temperature;