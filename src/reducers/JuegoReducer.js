export const initialState = {
    jugadores:[],
    jugador:{},
    
}

export default function jugadorReducer(state = initialState, action){
    switch (action.type) {
        case actions.LOADING:
            return{...state, loading:true}
            break;
        case actions.LOADED_SUCCESS:
            return{...state, ...action.payload, loading: false, hasErrors: false}
        case actions.LOADED_FAILURE:
            return {...state, loading: false, hasErrors:true}
        default:
            return state;
    }
}