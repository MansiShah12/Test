import { call, put } from 'redux-saga/effects'
import {registerUserSuccess, logoutUserSuccess, updatedUserSuccess} from '../Actions/users'
import {registerUsers, logout, login, update} from '../services/users'

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
                firstName : register.first_name,
                lastName : register.last_name,
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
            firstName : loginData.first_name,
            lastName : loginData.last_name,
            loggedIn : true
          }
          yield put(registerUserSuccess(accessData))
      }else{
        alert("Login Failed")
    }
     
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
    if(logoutData){
        accessData = {
            email : '',
            accessToken :'',
            firstName : '',
            lastName : '',
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

export function* updateUser(action){
    console.log("in saga of UPDATE_USER", action.payload)
    var accessData= {}
    updatedData = {
        first_name : action.payload.first_name,
        last_name : action.payload.last_name,
        email : action.payload.email
    }
    try {
    var response = yield call(update, updatedData)
    var updatedData = JSON.parse(response._bodyInit)
        if(response.status== 200){
           var  newData = {
                firstName : updatedData.first_name,
                lastName : updatedData.last_name,
                
            }
        yield put(updatedUserSuccess(newData))
        }
    
   }catch (e) {
    console.log("In catchhhh++++++", e)
    }
}