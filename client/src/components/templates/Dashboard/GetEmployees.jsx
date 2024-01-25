import { Button,  Table } from "antd";
import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from "react-router-dom";
import { FormOutlined, DeleteOutlined, BarsOutlined } from "@ant-design/icons";
import { deleteEmployee, fetchEmployee } from "../../redux/";
import Swal from 'sweetalert2';
import './GetEmployees.css'
import ViewEmployee from "../Models/ViewEmployee";

const GetEmployees = ({tabVal}) => {
  const [filteredData,setFilteredData]  =useState([])
  const [isPreview, setPreview] = useState(false);
  const [empId,setEmpId] = useState();
  const dispatch=useDispatch();
  const navigate = useNavigate()
  const employeeNData = useSelector(state=>state.employee.employees)

    const filterData = () => {
      if (tabVal !== "All") {
        const updateTable = employeeNData?.filter((v) => v.team_name === tabVal)
        setFilteredData(updateTable)
      }
    }
    useEffect(()=>{
      dispatch(fetchEmployee())
      filterData()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isPreview])
    const updateEmployeeHandler = (id) => {
      navigate(`/update/${id}`)
    }

    const deleteEmployeeHandler = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteEmployee(id))
          dispatch(fetchEmployee())
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    }

    const viewEmployeeHandler = (id)=>{
      setPreview(true)
      setEmpId(id)
    }
    
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "employee_id",
      key: "employee_id",
      width: 130,
      fixed: "left",
      responsive: ["sm"]
    },
    {
      title: "Name",
      dataIndex: "employee_name",
      key: "employee_name",
      fixed: "left",
      width: 170,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 300,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      width: 100,
    },
    {
      title: "Contact No",
      dataIndex: "contact_no",
      key: "contact_no",
      width: 150,
    },
    {
      title: "Other No",
      dataIndex: "other_contact_no",
      key: "other_contact_no",
      width: 150,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 250,
    },
    {
      title: "Team",
      dataIndex: "team_name",
      key: "team_name",
      width: 120,
    },
    {
      title: "Join Date",
      dataIndex: "joining_date",
      key: "joining_date",
      width: 140,
    },
    {
      title: "Birth Date",
      dataIndex: "birth_date",
      key: "birth_date",
      width: 140,
    },
    {
      title: "Bank Name",
      dataIndex: "bank_name",
      key: "bank_name",
      width: 200,
    },
    {
      title: "Bank Holder Name",
      dataIndex: "bank_holder_name",
      key: "bank_holder_name",
      width: 200,
    },
    {
      title: "Account No",
      dataIndex: "account_no",
      key: "account_no",
      width: 200,
    },
    {
      title: "Ifsc",
      dataIndex: "ifsc_code",
      key: "ifsc_code",
      width: 150,
    },
    {
      title: <BarsOutlined className="view-icon-column" />,
      dataIndex: "view",
      key: "view",
      fixed: "right",
      width: 55
    },
    {
      title: <FormOutlined className="update-icon-column"/>,
      key: "update",
      dataIndex:"update",
      fixed: "right",
      width: 55,
    },
    {
      title: <DeleteOutlined className="delete-icon-column"/>,
      key: "delete",
      dataIndex:"delete",
      fixed: "right",
      width: 55 
    }
  ];
  const data =Array.isArray(employeeNData) && employeeNData.map((employee,index)=>{
    return {
      key:index,
      employee_id:employee.employee_id,
      employee_name:employee.employee_name,
      address:employee.address,
      gender:employee.gender,
      contact_no:employee.contact_no,
      other_contact_no:employee.other_contact_no,
      email:employee.email,
      team_name:employee.team_name,
      joining_date:employee.joining_date.split("T")[0],
      birth_date:employee.birth_date.split("T")[0],
      bank_name:employee.bank_name,
      bank_holder_name:employee.bank_holder_name,
      account_no:employee.account_no,
      ifsc_code:employee.ifsc_code,
      view:<Button type="text" onClick={()=>viewEmployeeHandler(employee.id)}><BarsOutlined className="view-icon"/></Button>,
      update:<Button type="text" onClick={()=>updateEmployeeHandler(employee.id)}><FormOutlined className="update-icon"/></Button>,
      delete:<Button type="text" onClick={()=>deleteEmployeeHandler(employee.id)}><DeleteOutlined className="delete-icon"/></Button>
    }
  });

  const finalFilteredData = Array.isArray(filteredData) && filteredData.map((employee,index)=>{
    return {
      key:index,
      employee_id:employee.employee_id,
      employee_name:employee.employee_name,
      address:employee.address,
      gender:employee.gender,
      contact_no:employee.contact_no,
      other_contact_no:employee.other_contact_no,
      email:employee.email,
      team_name:employee.team_name,
      joining_date:employee.joining_date.split("T")[0],
      birth_date:employee.birth_date.split("T")[0],
      bank_name:employee.bank_name,
      bank_holder_name:employee.bank_holder_name,
      account_no:employee.account_no,
      ifsc_code:employee.ifsc_code,
      view:<Button type="text" onClick={()=>viewEmployeeHandler(employee.id)}><BarsOutlined className="view-icon"/></Button>,
      update:<Button type="text" onClick={()=>updateEmployeeHandler(employee.id)}><FormOutlined className="update-icon"/></Button>,
      delete:<Button type="text" onClick={()=>deleteEmployeeHandler(employee.id)}><DeleteOutlined className="delete-icon"/></Button>
    }
  })
  return (
    <>
    {!isPreview && <Table
    columns={columns}
    dataSource={filteredData.length > 0 ? finalFilteredData : tabVal === 'All' ? data : null}
    scroll={{
      x: 1500,
      y: 300,
    }}
    />}
    {isPreview && <ViewEmployee id={empId}/>}
    <br/>
    {isPreview && <Button type="primary" onClick={()=>setPreview(false)}>Back To Home</Button>}
    </>
  )
};

export default GetEmployees;
