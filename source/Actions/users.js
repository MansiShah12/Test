 export default function registerUser(data){
     console.log("register data is", data)
     return({
         type : "REGISTER_USER",
         payload: data
        }
     )
}

 export  function registerUserSuccess(data){
    return({
        type : 'REGISTER_USER_SUCCESS',
        payload : data
    })
  }