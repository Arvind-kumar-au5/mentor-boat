import {
    GET_PROFILE
}
from "./type"
import axios from "axios"

export default getCurrentProfile = () => async dispatch=>{
    try {
        const res = axios.get('/api/auth')
        console.log(res)
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
      
        
    } catch (error) {
        console.log(error)
    }
}