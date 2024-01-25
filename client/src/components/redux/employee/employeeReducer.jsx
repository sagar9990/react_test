import { DELETE_EMPLOYEE, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_SUCCESS, FETCH_ONE_EMPLOYEE, INSERT_EMPLOYEE, UPDATE_EMPLOYEE } from "./employeeTypes"


const initialState = {
    loading:false,
    employees :[],
    error: ''
}

const employeeReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_EMPLOYEE_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETCH_EMPLOYEE_SUCCESS:
            return {
                loading:false,
                employees:action.payload,
                error:''
            }
        case FETCH_EMPLOYEE_FAILURE:
            return {
                loading:false,
                employees:[],
                error:action.payload
            }
        case FETCH_ONE_EMPLOYEE:
            return {
                loading:false,
                employees:action.payload,
                error:''
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                loading:false,
                error:''
            }
        case INSERT_EMPLOYEE :
            return {
                ...state,
                loading:false,
                error:''
            }
        case DELETE_EMPLOYEE :
             return {
                ...state,
                loading:false,
                error:''
             }
        default : return state
    }

}

export default employeeReducer