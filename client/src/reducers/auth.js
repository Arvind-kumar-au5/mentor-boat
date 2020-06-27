import {
    REGISTER_SUCCESS,
    USER_LOADED,
    AUTH_ERROR,
    REGISTER_FAILED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT
    
} from "../actions/type"


// Auth intial state
const intialState = {
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null
}

export default function(state = intialState,action) {
    const {type,payload} =action
    
    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                loading:false,
                user:payload
            }
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                loading:false,
                isAuthenticated:true
            }
        case AUTH_ERROR:
        case REGISTER_FAILED:
        case LOGIN_FAILED:
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                loading:false,
                isAuthenticated:false
            }

        default:
            return state
    }
    
}