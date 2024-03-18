import{ActionTypes} from "../Constants/action-type";

export const setStudent = (students) => {
    return{
        type: ActionTypes.SET_STUDENTS,
        payload: students,
    }
}