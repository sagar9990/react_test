import {
  DELETE_EMPLOYEE,
  FETCH_EMPLOYEE_FAILURE,
  FETCH_EMPLOYEE_REQUEST,
  FETCH_EMPLOYEE_SUCCESS,
  FETCH_ONE_EMPLOYEE,
  INSERT_EMPLOYEE,
  UPDATE_EMPLOYEE,
} from "./employeeTypes";
import axios from "axios";

export const fetchEmployeeRequest = () => {
  return {
    type: FETCH_EMPLOYEE_REQUEST,
  };
};

export const fetchEmployeeSuccess = (employee) => {
  return {
    type: FETCH_EMPLOYEE_SUCCESS,
    payload: employee,
  };
};

export const fetchEmployeeFailure = (error) => {
  return {
    type: FETCH_EMPLOYEE_FAILURE,
    payload: error,
  };
};

export const insertEmployee = () => {
  return {
    type: INSERT_EMPLOYEE,
  };
};

export const updateEmployee = () => {
    return {
      type: UPDATE_EMPLOYEE,
    };
  };
  
export const deleteOneEmployee = () => {
  return {
    type: DELETE_EMPLOYEE,
  };
};

export const getOneEmployee = (employee) => {
  return {
    type: FETCH_ONE_EMPLOYEE,
    payload: employee,
  };
};

export const getEmployeeById =  (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:8011/employees/getById/${id}`)
      .then((res) => {
        const emp = res.data;
        dispatch(getOneEmployee(emp));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEmployeeFailure(errorMsg));
      });
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:8011/employees/delete/${id}`);
    dispatch(deleteOneEmployee(id));
  };
};
export const updateOneEmployee = (data,id) =>{
    return async (dispatch)=>{
        await axios.put(`http://localhost:8011/employees/update/${id}`,data)
        dispatch(updateEmployee(data))
    }
}
export const insertNewEmployee = (data) => {
  return async (dispatch) => {
    await axios.post("http://localhost:8011/employees/new/", data);
    dispatch(insertEmployee(data));
  };
};
export const fetchEmployee = () => {
  return async (dispatch) => {
    dispatch(fetchEmployeeRequest);
    await axios
      .get("http://localhost:8011/employees/")
      .then((response) => {
        const employee = response.data;
        dispatch(fetchEmployeeSuccess(employee));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchEmployeeFailure(errorMsg));
      });
  };
};
