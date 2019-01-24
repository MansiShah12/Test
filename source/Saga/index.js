import {takeEvery} from 'redux-saga/effects'
import allMovies from './fetchMovies.js'
import register from './register.js'



function* rootSaga(){
    console.log("in rootsasasasasasasasa")
    yield takeEvery('FETCH_MOVIES',allMovies )
    yield takeEvery('REGISTER_USER', register)
    
}
export default rootSaga;

