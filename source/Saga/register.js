import { call, put } from 'redux-saga/effects'
import {registerUserSuccess} from '../Actions/users'
import registerUsers from '../services/users'

export default function* register(action){
    console.log("in register Sagagagagagagagga", action.payload)
    var data= action.payload
   try {
    var response = yield call(registerUsers, data)
    var register = JSON.parse(response._bodyInit)
    var accessData= {}
    if(response.status== 200){
          accessData = {
              email : register.email,
             accessToken : register.access_token,
             
          }
      }
      
    //   else 
    //   registered = false
     yield put(registerUserSuccess(accessData))
   }catch (e) {
    console.log("In catchhhhhhhhh1111", e)
    }
}