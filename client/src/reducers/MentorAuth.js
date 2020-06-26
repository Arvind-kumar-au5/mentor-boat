import {
    MENTOR_REGISTER,
    MENTOR_USER_LOADED,
    MENTOR_LOGIN,
    MENTOR_LOGOUT
} from "../actions/type"

const initialState = {
        token:localStorage.getItem('token'),
        isAuthenticated:null,
        mloading:true,
        misAuthenticated : false,
        mentor:{}
};
console.log(initialState)

export default function (state=initialState,action) {
    const  { type,payload } = action
    switch(type){
        case MENTOR_USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                misAuthenticated:true,
                mloading:false,
                mentor:payload
            }
        case MENTOR_REGISTER:
        case MENTOR_LOGIN:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                mloading:false,
                misAuthenticated:true,
                isAuthenticated:true
            }
        case MENTOR_LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                mloading:true,
                misAuthenticated:false
            }
        

        default:
            return state
        
    }
    
}