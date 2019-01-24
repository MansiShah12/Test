const data = {
    registered : false,
    email : '',
    accessToken : ''
}

export default function (state = data, action){
    switch(action.type){
        case 'REGISTER_USER_SUCCESS' :
        console.log("action.payloadddddddd", action.payload)
            return{
                ...state,
                registered : true,
                email : action.payload.email,
                accessToken : action.payload.accessToken

            }
        default:
    return state;
    }
}