
import {SET_VALIDATION} from "./type"
import { v4 as uuidv4 } from 'uuid';

export const setValidation = (msg,validayionType) => dispatch=>{
    const id = uuidv4();
    console.log(dispatch)

    dispatch({
        type:SET_VALIDATION,
        payload:{msg,validayionType,id}
    })
}