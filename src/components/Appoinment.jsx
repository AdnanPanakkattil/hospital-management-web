import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, message, Row, Col,Select, } from 'antd';
import { useCreateAppoinment } from '../utils/Appoinment/hooks';
import { getDoctorsData } from '../utils/Doctors/Doctors';
import { useQuery } from 'react-query'
import { getDepartmentData } from '../utils/Department/Department';

const { TextArea } = Input;

const Appoinment = () => {
  const [form] = Form.useForm();
  const [date, setDate] = useState(null);
  const { mutate: Create } = useCreateAppoinment();
  const {data:Doctorsdata,isLoading:DoctorsLoading} = useQuery('getDoctersFroProduction',getDoctorsData)
  const {data:Departmentdata,isLoading:DepartmentLoading} = useQuery('getDepartmentFroProduction',getDepartmentData)


  const handleDateChange = (date) => {
    setDate(date);
    form.setFieldsValue({ appointment_date: date });
  };
  

  const onFinish = (values)=>{
    console.log(values);
    Create(values, {
      onSuccess() {
        message.success("created successfully");
        form.resetFields();
      },
      onError(err) {
        console.error("Submission error:", err);
        message.error("error");
      }
    });
    
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="w-full h-[300px] pt-[100px] bg-white">
        <div className="text-center text-5xl font-bold">Request an Appointment</div>
        <div className="text-center text-3xl mt-10">
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className="relative w-full max-w-4xl mx-auto p-8">
        <Form layout='vertical' onFinish={onFinish} form={form}className="bg-white p-6 rounded-lg shadow-lg" >
          <h2 className="text-2xl font-semibold text-center mb-6">Appointment Form</h2>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="First Name" name="first_name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Last Name" name="last_name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]} >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Mobile Number" name="mobile" rules={[{ required: true }]} >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="Patient Name" name="patient_name" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Doctor's Name" name="doctor_name" rules={[{ required: true }]}>
            
              <Select
                placeholder="select Doctors"
                options={DoctorsLoading || !Doctorsdata ? [] : Doctorsdata.data?.map(it => ({
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
              <Form.Item label="Department Name" name="department" rules={[{ required: true }]}>

              <Select
                placeholder="select Department"
                options={DepartmentLoading || !Departmentdata ? [] : Departmentdata.data?.map(it => ({
                  value: it.id,
                  label: it.department_name
                  }))}
                  allowClear
                />

              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item label="Appointment Date" name="appointment_date" rules={[{ required: true }]}>
                <DatePicker className="w-full" format="YYYY-MM-DD" onChange={handleDateChange} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Message" name="message" rules={[{ required: true }]}>
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


