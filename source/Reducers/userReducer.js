const data = {
    registered : false
}

export default function (state = data, action){
    switch(action.type){
        case 'REGISTER_USER_SUCCESS' :
        console.log("action.payloadddddddd", action.payload)
            return{
                ...state,
                registered : action.payload
            }
        default:
    return state;
    }
}