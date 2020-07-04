// Actions config
import {
  FETCH_SUCCESS,
  FETCH_FAILURE,
  FETCH_ONE,
  MODAL
} from '../config/variablesConfig'
import axios from 'axios'
const apikey = '45be6f88'

const modalAction = data => {
  return {
    type: MODAL,
    payload: data
  }
}

const fetchSuccess = data => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}
const fetchSuccessOne = data => {
  return {
    type: FETCH_ONE,
    payload: data
  }
}
const fetchFailure = error => {
  return {
    type: FETCH_FAILURE,
    payload: error
  }
}
const fetchMovieSeriesOne = id => {
  const URI_ONE = `https://www.omdbapi.com/?i=${id}&apikey=${apikey}&&r=json`
  return dispatch => {
    axios
      .post(URI_ONE)
      .then(response => {
        dispatch(fetchSuccessOne(response.data))
      })
      .catch(error => {
        dispatch(fetchFailure('No result' + error))
      })
  }
}
const fetchMovieSeries = (title, type) => {
  let page = 1
  //TODO HENRY DEBES PASAR EL PARAMETRO DE NUMERO DE PAGINA CUANDO CREES LA PAGINACION
  const URI_SEARCH = `https://www.omdbapi.com/?s=${title}&apikey=${apikey}&type=${type}&page=${page}&r=json`
  return dispatch => {
    axios
      .post(URI_SEARCH)
      .then(response => {
        dispatch(fetchSuccess(response.data.Search))
      })
      .catch(error => {
        dispatch(fetchFailure('No result' + error))
      })
  }
}

export { fetchMovieSeries, fetchMovieSeriesOne, modalAction }
