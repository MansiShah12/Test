import {combineReducers} from 'redux'
import MoviesReducer from './MoviesReducer'
import userReducer from './userReducer'

export default combineReducers ({
    MoviesReducer,
    userReducer
})
