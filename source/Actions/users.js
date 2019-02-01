 export default function registerUser(data){
     return({
         type : "REGISTER_USER",
         payload: data
        })
}

export  function loginUser(loginData){
     return({
        type : "LOGIN_USER",
        payload: loginData
       })
}

 export  function registerUserSuccess(data){
    return({
        type : 'REGISTER_USER_SUCCESS',
        payload : data
    })
}

export  function logoutUser(email){
    return({
        type : 'LOGOUT_USER',
        payload : email
    })
}

export  function logoutUserSuccess(data){
    return({
        type : 'LOGOUT_USER_SUCCESS',
        payload : data
    })
}
export  function updateUser(updatedata){
    return({
        type : 'UPDATE_USER',
        payload : updatedata
    })
}
export function updatedUserSuccess(data){
    return({
        type : 'UPDATE_USER_SUCCESS',
        payload : data
    })
}