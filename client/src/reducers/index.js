import { combineReducers } from 'redux';
import validation from "./validation"
import register from "./auth"
import profile from "./Profile"
import mentor from "./MentorAuth"



export default combineReducers({
    validation,
    register,
    profile,
    mentor
});


