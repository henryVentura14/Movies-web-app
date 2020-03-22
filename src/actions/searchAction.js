// Actions config
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../config/variables.config'
import Axios from 'axios'

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST
  }
}
const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}
const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
const fetchMovieSeries = (title, type) => {
  const apikey = '45be6f88'
  const URI = `http://www.omdbapi.com/?s=${title}&apikey=${apikey}&type=${type}`
  return dispatch => {
    dispatch(fetchRequest())
    Axios.post(URI)
      .then(response => {
        dispatch(fetchSuccess([response.data]))
      })
      .catch(error => {
        dispatch(fetchFailure('No result'))
      })
  }
}
export default fetchMovieSeries
