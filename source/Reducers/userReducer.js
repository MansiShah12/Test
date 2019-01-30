const data = {
     email : '',
    accessToken : '',
    loggedIn : false
}

export default function (state = data, action){
    switch(action.type){
        case 'REGISTER_USER_SUCCESS' :
       return{
                ...state,
                loggedIn : true,
                email : action.payload.email,
                accessToken : action.payload.accessToken
            }
            case 'LOGOUT_USER_SUCCESS' :
         return{
                ...state,
                loggedIn : false,
                email : '',
                accessToken : '',
             }
        default:
    return state;
    }
}