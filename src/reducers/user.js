import { REFETCH, UPDATE_DATA } from '../actions/actionTypes';

const initialState = {
 data: [],
 refetchData: true
};

const user = (state = initialState, action) => {
 switch (action.type) {
  case UPDATE_DATA :
   return {
    ...state,
    data: action.payload.data,
    refetchData: false
   }
  case REFETCH :
   return {
    ...state,
    refetchData: true
   }
  default: {
   return state;
  }
 }
};

export default user;