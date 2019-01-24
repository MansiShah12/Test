const data = {
    movies : []
}

export default function (state = data, action){
    switch(action.type){
        case 'FETCH_MOVIES_SUCCESS' :
            return{
                ...state,
                data : {
                    movies : action.payload
                }
            }
        default:
    return state;
    }
}


