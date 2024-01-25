import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeById, updateOneEmployee } from "../../redux";
import dayjs from "dayjs";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Typography,
} from "antd";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './AddUpdateForm.css';
import { HomeFilled } from "@ant-design/icons";


const UpdateEmployeeForm = (props) => {
  const [checkedRadio, setCheckedRadio] = useState("");
  const { Title } = Typography;
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const id = props.id;
  const dispatch = useDispatch();
  const EmployeeObject = useSelector((state) => state.employee.employees);
   
  useEffect(() => {
    dispatch(getEmployeeById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFinish = (values) => {
    dispatch(updateOneEmployee(values, id));
    navigate("/");
  };

  const onFinishFailed = () => {
    Swal.fire({
      icon: "error",
      title: "Not Valid",
      text: "Data is not valid. please enter a valid Data",
    });
  };

  useEffect(() => {
    if (EmployeeObject) {
      form.setFieldsValue({
        employee_id: EmployeeObject.employee_id,
        employee_name: EmployeeObject.employee_name,
        address: EmployeeObject.address,
        gender: EmployeeObject.gender,
        contact_no: EmployeeObject.contact_no,
        other_contact_no: EmployeeObject.other_contact_no,
        email: EmployeeObject.email,
        team_name: EmployeeObject.team_name,
        joining_date: EmployeeObject.joining_date?.split("T")[0],
        birth_date: EmployeeObject.birth_date?.split("T")[0],
        bank_name: EmployeeObject.bank_name,
        bank_holder_name: EmployeeObject.bank_holder_name,
        account_no: EmployeeObject.account_no,
        ifsc_code: EmployeeObject.ifsc_code,
      });
      setCheckedRadio(EmployeeObject.gender);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [EmployeeObject]);

  
  return (
    <>
    {EmployeeObject && (
      <div  className="update-form">
      <Title level={2} className="update-text">Update Employee</Title>
      <Card>
        <div className="flex_style">
      <Title level={3} className="detail-title">
        Basic Details
      </Title>
      <Button type="primary" onClick={()=>navigate("/")}><HomeFilled /></Button>
        </div>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[8, 8]}>
          <Col span={8} xs={{ span: 24, order: 3 }}  xl={8} md={8}>
            <Form.Item
              label="Employee Id:"
              name="employee_id"
              rules={[
                {
                  required: true,
                  pattern: new RegExp(/^[0-9]*$/),
                  message: "Please Add Employee Id! Ex:12..",
                },
              ]}
              hasFeedback
            >
              <InputNumber className="input-number"   />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 3 }} xl={8} md={8} >
            <Form.Item
              label="Name"
              name="employee_name"
              rules={[
                {
                  required: true,
                  message: "Please input Employee Name!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={{ span: 24, order: 3 }} xl={8} md={8} >
            <Form.Item
              label="Address:"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input Employee Address!",
                },
              ]}
              hasFeedback
            >
              <Input.TextArea />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please select your gender!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Male" checked={checkedRadio === "Male"}>
                  {" "}
                  Male{" "}
                </Radio>
                <Radio value="Female" checked={checkedRadio === "Female"}>
                  {" "}
                  Female{" "}
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>

          <Col span={8} xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Contact No:"
              name="contact_no"
              rules={[
                {
                  required: true,
                  message: "Please Add Employee Contact No! Ex:1234567890",
                },
                {
                  pattern: new RegExp(/^\d{10}$/),
                  message: "Please Enter a Valid No!",
                },
              ]}
              hasFeedback
            >
              <InputNumber className="input-number" />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Other No:"
              name="other_contact_no"
              rules={[
                {
                  required: true,
                  message: "Please input Employee Other Contact! Ex:1234567890",
                },
                {
                  pattern: new RegExp(/^\d{10}$/),
                  message: "Please Enter a Valid No!",
                },
              ]}
              hasFeedback
            >
              <InputNumber className="input-number" />
            </Form.Item>
          </Col>
          <Col span={8} xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Email:"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please Add Employee Email Id!",
                },
                {
                  type: "email",
                  message: "Please Add a valid Email Id",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Select Team"
              name="team_name"
              rules={[
                {
                  required: true,
                  message: "Please Select Team/Department!",
                },
              ]}
              hasFeedback
            >
              <Select>
                <Select.Option value="Absolute">Absolute</Select.Option>
                <Select.Option value="Centrix">Centrix</Select.Option>
                <Select.Option value="Reservation">Reservation</Select.Option>
                <Select.Option value="Integration">Integration</Select.Option>
                <Select.Option value="Operation">Operation</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8} xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Joining Date:"
              name="joining_date"
              rules={[
                {
                  required: true,
                  message: "Please Select Employee Joining Date!",
                },
              ]}
              getValueFromEvent={(e) => e?.format("YYYY-MM-DD")}
              getValueProps={(e) => ({
                value: e ? dayjs(e) : "",
              })}
            >
              <DatePicker
                className="input-number"
                disabledDate={(current) =>
                  current.isBefore(moment().subtract(1, "day"))
                }
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
          <Col  className="column-style" span={8} xs={{ span: 24, order: 3 }} xl={8} md={8}>
            <Form.Item
              label="Birth Date"
              name="birth_date"
              rules={[
                {
                  required: true,
                  message: "Please Select Employee Birth Date!",
                },
              ]}
              getValueFromEvent={(e) => e?.format("YYYY-MM-DD")}
              getValueProps={(e) => ({
                value: e ? dayjs(e) : "",
              })}
            >
              <DatePicker
                className="input-number"
                disabledDate={(current) =>
                  current.isAfter(moment().subtract(18, "years"))
                }
                format="YYYY-MM-DD"
              />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Title level={3} className="detail-title">
          Bank Details
        </Title>
        <Divider />
        <Row gutter={[8, 8]} >
          <Col span={8} xs={{ span: 24, order: 2 }} xl={8} md={8}>
            <Form.Item
              label="Bank Name:"
              name="bank_name"
              rules={[
                {
                  required: true,
                  message: "Please Add Employee Bank Name!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 2 }} xl={8} md={8}>
            <Form.Item
              label="Holder Name:"
              name="bank_holder_name"
              rules={[
                {
                  required: true,
                  message: "Please input Employee Bank Holder Name!",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} xs={{ span: 24, order: 2 }} xl={8} md={8}>
            <Form.Item
              label="Account No:"
              name="account_no"
              rules={[
                {
                  required: true,
                  message: "Please Add Employee Bank Account No!",
                },
                {
                  pattern: new RegExp(/^\d{14}$/),
                  message: "Please Enter a Valid Account No! Ex:12345678901234",
                },
              ]}
              hasFeedback
            >
              <InputNumber className="input-number" />
            </Form.Item>
          </Col>
          <Col span={8} className="column-style" xs={{ span: 24, order: 2 }} xl={8} md={8}>
            <Form.Item
              label="Ifsc:"
              name="ifsc_code"
              rules={[
                {
                  required: true,
                  message: "Please input Employee Bank Ifsc!",
                },
                {
                  pattern: new RegExp(/^[A-Z]{4}0[A-Z0-9]{6}$/),
                  message: "Please Enter a Valid Ifsc Code! Ex:ABCD0123456",
                },
              ]}
              hasFeedback
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Divider />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          className="form-btn"
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </Card>
    </div>
    )}
    </>
  );
};

export default UpdateEmployeeForm;
