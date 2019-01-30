import { call, put } from 'redux-saga/effects'
import {registerUserSuccess, logoutUserSuccess} from '../Actions/users'
import {registerUsers, logout, login} from '../services/users'

export default function* register(action){
    var data= action.payload
   try {
        var response = yield call(registerUsers, data)
        console.log('response ogf register######', response)
        var register = JSON.parse(response._bodyInit)
        var accessData= {}
        if(response.status== 200){
            accessData = {
                email : register.email,
                accessToken : register.access_token,
                loggedIn : true
            }
        yield put(registerUserSuccess(accessData))
        }
   }catch (e) {
    console.log("In catchhhhhhhhh########", e)
    }
}

export function* loginUser(action){
    const data = action.payload
 try {
    var response = yield call(login, data)
     console.log('responseeeeeee=====', response)
    var loginData = JSON.parse(response._bodyInit)
    var accessData= {}
    if(loginData.status== 200){
         accessData = {
            email : loginData.email,
            accessToken : loginData.access_token,
            loggedIn : true
          }
      }
      else 
      registered = false
     yield put(registerUserSuccess(accessData))
   }catch (e) {
    console.log("In catchhhh=====", e)
    }
}


export function* logoutUser(action){
    var accessData= {}
    const email = action.payload
    try {
    var response = yield call(logout, email)
    console.log('responseeeeeee+++++++', response)
    var logoutData = JSON.parse(response._bodyInit)
    if(logoutData.status==200){
        accessData = {
            email : '',
            accessToken :'',
            loggedIn : false
        }
        yield put(logoutUserSuccess(accessData))
    }
    else{
        alert("Logout Failed")
    }
   }catch (e) {
    console.log("In catchhhh++++++", e)
    }
}