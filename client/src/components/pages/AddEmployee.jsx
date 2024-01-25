import React from 'react'
import AddEmployeeForm from '../templates/Forms/AddEmployeeForm'
import Typography from 'antd/es/typography/Typography';
import './AddEmployee.css';
const { Title } = Typography;

const AddEmployee = () => {
  return (
    <>
    <Title level={2} className="add-emp-text">Add New Employee</Title>
    <div className='add-employee-component'>
    <AddEmployeeForm/>
    </div>
    </>
  )
}

export default AddEmployee