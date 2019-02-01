const data = {
     email : '',
    accessToken : '',
    firstName : '',
    lastname : '',
    loggedIn : false
}

export default function (state = data, action){
    switch(action.type){
        case 'REGISTER_USER_SUCCESS' :
       return{
                loggedIn : true,
                email : action.payload.email,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                accessToken : action.payload.accessToken
            }
            case 'LOGOUT_USER_SUCCESS' :
         return{
                loggedIn : false,
                email : '',
                firstName : '',
                lastName :'',
                accessToken : '',
             }
             case 'UPDATE_USER_SUCCESS' :
         return{
             ...state,
            firstName : action.payload.firstName,
            lastName : action.payload.lastName,
             }
        default:
    return state;
    }
}