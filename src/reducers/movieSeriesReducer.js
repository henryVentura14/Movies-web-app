import {
  FETCH_SUCCESS,
  FETCH_ONE,
  FETCH_FAILURE,
  MODAL
} from '../config/variablesConfig'

const initialState = {
  moviesSeries: [],
  moviesSeriesOne: [],
  error: '',
  modal: false,
  loading: false
}

const movieSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS: {
      return {
        ...state,
        moviesSeries: action.payload || [],
        error: ''
      }
    }
    case FETCH_ONE: {
      return {
        ...state,
        moviesSeriesOne: action.payload,
        error: ''
      }
    }
    case FETCH_FAILURE: {
      return {
        ...state,
        moviesSeries: [],
        moviesSeriesOne: [],
        error: action.payload
      }
    }
    case MODAL: {
      return {
        ...state,
        modal: action.payload
      }
    }
    default:
      return state
  }
}
export default movieSeriesReducer
