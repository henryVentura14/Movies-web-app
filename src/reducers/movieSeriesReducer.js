import {
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../config/variables.config'

const initialState = {
  moviesSeries: [],
  error: '',
}

const movieSeriesReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_SUCCESS: {
      return {
        ...state,
        moviesSeries: action.payload,
        error: ''
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        moviesSeries: [],
        error: action.payload
      }
    }
    default:
      return state
  }
}
export default movieSeriesReducer
