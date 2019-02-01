import { call, put } from 'redux-saga/effects'
import {fetchMoviesSuccess} from '../Actions/movies'
import callMovies from '../services/fetchMovies'

export default function* allMovies(){
   try {
    var movies = yield call(callMovies)
    //console.log("movies areeeee", movies)
    movies=movies._bodyInit
    movies = JSON.parse(movies)
  yield put(fetchMoviesSuccess(movies.movies))
   }catch (e) {
    console.log("In catchhhhhhhhh", e)
    
}
}

