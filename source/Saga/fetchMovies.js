import { call, put } from 'redux-saga/effects'
import {fetchMoviesSuccess} from '../Actions/movies'
import callMovies from '../services/fetchMovies'

export default function* allMovies(){
    console.log("in fetchMovies Sagagagagagagagga")
   try {
    var movies = yield call(callMovies)
    movies=movies._bodyInit
    movies = JSON.parse(movies)
  console.log("movies areee", movies.movies)
     yield put(fetchMoviesSuccess(movies.movies))
   }catch (e) {
    console.log("In catchhhhhhhhh", e)
  
}
}

