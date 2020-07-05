import React ,{useEffect}from  'react'
import {loadMentor} from "../../actions/MentorAuth"
import store from '../../store';
import setAuthToken from '../../utils/SetToken';

export default function MentorDashboard() {
   
    useEffect(() => {
        setAuthToken(localStorage.token);
        store.dispatch(loadMentor())
      }, [])
    
    return (
        <div>
            Hello 
        </div>
    )
}
