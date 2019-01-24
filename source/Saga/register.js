import { call, put } from 'redux-saga/effects'
import {registerUserSuccess} from '../Actions/users'
import registerUsers from '../services/users'

export default function* register(action){
    console.log("in register Sagagagagagagagga", action.payload)
    var data= action.payload
   try {
    var register = yield call(registerUsers, data)
      console.log("movies areee", register)
      if(register.status== 200)
      registered = true
      else 
      registered = false
     yield put(registerUserSuccess(registered))
   }catch (e) {
    console.log("In catchhhhhhhhh", e)
    }
}