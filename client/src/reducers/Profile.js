import {
    GET_PROFILES,
    PROFILE_ERROR
}
from "../actions/type"
import { prototype } from "stream";

const initialState = {
    profiles: [],
    loading: true,
    error: {}
};
console.log(initialState)

export default function (state=initialState,action) {
    const  { type,payload } = action


    switch(type){
        case GET_PROFILES:

            return {
                ...state,
                profiles: payload,
                loading: false,
                
            };
            
            
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                profile: null
            };
        default:
            return state
        
    }
    
}