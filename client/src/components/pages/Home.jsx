import { Button, Tabs } from 'antd';
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import GetEmployees from '../templates/Dashboard/GetEmployees';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import './Home.css';
const { Title } = Typography;

const Home = () => {
  const items = [
    {
      key:'1',
      label:'All',
      children: <GetEmployees tabVal="All"/>
    },
    {
      key: '2',
      label: 'Absolute',
      children: <GetEmployees  tabVal="Absolute"/>,
    },
    {
      key: '3',
      label: 'Centrix',
      children: <GetEmployees  tabVal="Centrix"/>,
    },
    {
      key: '4',
      label: 'Reservation',
      children: <GetEmployees  tabVal="Reservation"/>,
    },
    {
      key:'5',
      label: 'Integration',
      children: <GetEmployees  tabVal="Integration"/>
    },
    {
      key:'6',
      label:'Operation',
      children: <GetEmployees  tabVal="Operation"/>
    }
  ];


  return (
    <>
    <Content>
    <div className='content-one'><div className='content-two'>
          <Title level={2} >Employees List</Title>
          <Link to="/add" className='link-add-employee'><Button type='primary' >+ Employee</Button></Link>
        </div>
          <Tabs defaultActiveKey="1" items={items} />
        </div>
    </Content>
    </>
  )
}

export default Home