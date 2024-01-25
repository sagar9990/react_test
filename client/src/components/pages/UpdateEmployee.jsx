import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateEmployeeForm from '../templates/Forms/UpdateEmployeeForm';

const UpdateEmployee = () => {
  const params = useParams()
    return (
    <>
    <UpdateEmployeeForm id={params.id}/>
    </>
  )
}

export default UpdateEmployee