import { FETCH_TEMPERATURE } from './actionTypes'

export function fetchTemperature({ city, countryCode }) {
 return {
  type: FETCH_TEMPERATURE,
  payload: {
   city, countryCode
  }
 }
}