// Actions config
import {
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../config/variables.config'
import axios from 'axios'

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
  const URI = `http://www.omdbapi.com/?s=${title}&apikey=${apikey}&type=${type}&page=1&r=json`
  return dispatch => {
    axios
      .post(URI)
      .then(response => {
        dispatch(fetchSuccess(response.data.Search))
      })
      .catch(error => {
        dispatch(fetchFailure('No result' + error))
      })
  }
}

export default fetchMovieSeries
