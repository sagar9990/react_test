import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeById } from '../../redux';
import { Descriptions } from 'antd';

const ViewEmployee = ({id}) => {
  const dispatch = useDispatch();
  const EmployeeObject = useSelector((state) => state.employee.employees);
  
  useEffect(()=>{
    dispatch(getEmployeeById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    
    {EmployeeObject && <Descriptions title="Employee Info">
  <Descriptions.Item label="Employee Id">{EmployeeObject.employee_id}</Descriptions.Item>
  <Descriptions.Item label="Employee Name">{EmployeeObject.employee_name}</Descriptions.Item>
  <Descriptions.Item label="Address">{EmployeeObject.address}</Descriptions.Item>
  <Descriptions.Item label="Gender">{EmployeeObject.contact_no}</Descriptions.Item>
  <Descriptions.Item label="Contact No">{EmployeeObject.contact_no}</Descriptions.Item>
  <Descriptions.Item label="Other Contact No">{EmployeeObject.other_contact_no}</Descriptions.Item>
  <Descriptions.Item label="Email">{EmployeeObject.email}</Descriptions.Item>
  <Descriptions.Item label="Team Name">{EmployeeObject.team_name}</Descriptions.Item>
  <Descriptions.Item label="Joining Date">{EmployeeObject.joining_date}</Descriptions.Item>
  <Descriptions.Item label="Birth Date">{EmployeeObject.birth_date}</Descriptions.Item>
  <Descriptions.Item label="Bank Name">{EmployeeObject.bank_name}</Descriptions.Item>
  <Descriptions.Item label="Bank Holder Name">{EmployeeObject.bank_holder_name}</Descriptions.Item>
  <Descriptions.Item label="Account No">{EmployeeObject.account_no}</Descriptions.Item>
  <Descriptions.Item label="Ifsc Code">{EmployeeObject.ifsc_code}</Descriptions.Item>
  
</Descriptions>}
    
    </>
  )
}

export default ViewEmployee