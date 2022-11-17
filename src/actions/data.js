import { REFETCH, UPDATE_DATA } from './actionTypes'

export function updateData({ data }) {
 return {
  type: UPDATE_DATA,
  payload: {
   data
  }
 }
}

export function refetch() {
 return {
  type: REFETCH
 }
}