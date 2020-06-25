import {
    GET_PROFILES,
    PROFILE_ERROR
}
from "./type"
import axios from "axios"

export const getProfiles = () => async dispatch => {
  
  
    try {
      const res = await axios.get('/api/mentor/profiles');
  
      dispatch({
        type: GET_PROFILES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };