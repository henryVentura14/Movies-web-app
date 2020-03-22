import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_FAILURE
  } from '../config/variables.config'
  
  const initialState = {
    loading: false,
    moviesSeries: [],
    error: ''
  }
  
  const moviesSeriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_REQUEST: {
        return {
          ...state,
          loading: true
        }
      }
      case FETCH_SUCCESS: {
        return {
          ...state,
          loading: false,
          moviesSeries: action.payload,
          error: ''
        }
      }
      case FETCH_FAILURE: {
        return {
          ...state,
          loading: false,
          moviesSeries: [],
          error: action.payload
        }
      }
      default:
        return state
    }
  }
  export default moviesSeriesReducer