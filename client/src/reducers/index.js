import { combineReducers } from 'redux';
import validation from "./validation"
import register from "./auth"
import profile from "./Profile"



export default combineReducers({
    validation,
    register,
    profile,
});


