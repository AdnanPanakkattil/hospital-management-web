import React, { useState } from 'react';
import { useQuery } from 'react-query'
import { Form, Input, Button, DatePicker, message, Row, Col,Select, } from 'antd';
import { useCreateAppoinment } from '../utils/Appoinment/hooks';
import { getDoctorsData } from '../utils/Doctors/DoctorsApi';
import { getDepartmentData } from '../utils/Department/DepartmentApi';

const { TextArea } = Input;

const Appoinment = () => {

  const [form] = Form.useForm();
  const [date, setDate] = useState(null);
  const { mutate: Create } = useCreateAppoinment();
  const {data:doctorsdata,isLoading:doctorsLoading} = useQuery('getDoctersFroProduction',getDoctorsData)
  const {data:Departmentdata,isLoading:DepartmentLoading} = useQuery('getDepartmentFroProduction',getDepartmentData)
 
  // console.log({doctorsdata});
  
  const handleDateChange = (date) => {
    setDate(date);
    form.setFieldsValue({ appointment_date: date });
  };
  

  const onFinish = (values) => {
    console.log(values);
    Create(values, {
      onSuccess() {
        console.log("Appointment created successfully"); // Debug log
        message.success("Created successfully");
        form.resetFields();
      },
      onError(err) {
        console.error("Error creating appointment:", err); // Debug log
        message.error("Error");
      }
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full h-[300px] pt-[100px] bg-white">
        <div className="text-center text-2xl font-bold">Request an Appointment</div>
        <div className="text-center text-3xl mt-10">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto p-8">
        <Form layout='vertical' onFinish={onFinish} form={form}className="bg-white p-6 rounded-lg shadow-lg" >
          <h2 className="text-2xl font-semibold text-center mb-6">Appointment Form</h2>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="First Name" name="First_name" rules={[{required:true,message:"please enter  first name"}]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Last Name" name="Last_name" rules={[{required:true,message:"please enter last name"}]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="Email" name="Email" rules={[{required:true,message:"please enter Email"}]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Mobile Number" name="Phone" rules={[{required:true,message:"please enter Mobile Number"}]} >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="Patient Name" name="Patient_name" rules={[{required:true,message:"please enter Patient Name"}]}>
                  <Input />
                </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Doctor's Name" name="doctor_name" rules={[{required:true,message:"please enter Doctor's Name"}]}>
                <Select
                  placeholder="select Doctors"
                  options={doctorsLoading ? [] : doctorsdata?.data?.map(it => ({
                    value: it.id,
                    label: it.doctor_name
                  }))}
                allowClear
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
            <Form.Item label="Doctor's Name" name="department_name" rules={[{required:true,message:"please enter Doctor's Name"}]}>
                <Select
                  placeholder="select Department"
                  options={DepartmentLoading ? [] : Departmentdata?.data?.map(it => ({
                    value: it.id,
                    label: it.department_name
                  }))}
                allowClear
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Appointment Date" name="Date" rules={[{required:true,message:"please enter Appoinment Date"}]}>
                <DatePicker className="w-full" format="YYYY-MM-DD" onChange={handleDateChange} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Message" name="Massage">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
                <Button htmlType='submit' className='w-full' type='primary'>Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    
  );
};

export default Appoinment;


