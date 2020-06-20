import {SET_VALIDATION} from "../actions/type"


const initialState = []


export default function(state=initialState,action){
    const {type,payload} =action
    
    switch(type){
        case SET_VALIDATION:
           return [...state,payload]
        default:
            return state
    }
}


               