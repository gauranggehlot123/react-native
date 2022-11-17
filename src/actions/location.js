import { FETCH_LOCATION_DATA } from './actionTypes'

export function fetchLocation({ lat, lon }) {
 return {
  type: FETCH_LOCATION_DATA,
  payload: {
   lat, lon
  }
 }
}