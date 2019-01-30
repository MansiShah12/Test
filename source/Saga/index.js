import {takeEvery} from 'redux-saga/effects'
import allMovies from './fetchMovies.js'
import register, {logoutUser, loginUser} from './user.js'

function* rootSaga(){
    yield takeEvery('FETCH_MOVIES',allMovies )
    yield takeEvery('REGISTER_USER', register)
    yield takeEvery('LOGIN_USER', loginUser)
    yield takeEvery('LOGOUT_USER', logoutUser)
}
export default rootSaga;

