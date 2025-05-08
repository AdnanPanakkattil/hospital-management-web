import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { useCreateContact } from '../utils/Contact/Hooks';

const Contact = () => {
  const [form] = Form.useForm();
  const { mutate: Create } = useCreateContact();

  const onFinish = (values) => {
    console.log(values);
    Create(values, {
      onSuccess() {
        message.success('Created successfully');
        form.resetFields();
      },
      onError() {
        message.error('Error');
      },
    });
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Header */}
      <div className="bg-blue-400 w-full h-48 flex items-center justify-center">
        <p className="text-white pt-20 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Contact Us
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              icon: 'fa-regular fa-address-book',
              title: 'Address',
              content: '198 West 21th Street, Suite<br />721 New York NY 10016',
            },
            {
              icon: 'fa-brands fa-viber',
              title: 'Contact Number',
              content: '+576242189378',
            },
            {
              icon: 'fa-regular fa-paper-plane',
              title: 'Email Address',
              content: 'info@yoursite.com',
            },
            {
              icon: 'fa-brands fa-chrome',
              title: 'Website',
              content: 'yoursite.com',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-full h-auto flex flex-col items-center"
            >
              <div className="text-blue-500 text-3xl sm:text-4xl lg:text-5xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                {item.title}
              </h3>
              <p
                className="text-gray-600 text-center"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </div>

        {/* Form and Map */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto lg:mx-0">
            <Form layout="vertical" onFinish={onFinish} form={form}>
              <Form.Item
                label="Your Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                label="Your Email"
                name="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Enter a valid email address' },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="subject"
                rules={[{ required: true, message: 'Please enter the subject' }]}
              >
                <Input placeholder="Enter the subject" />
              </Form.Item>
              <Form.Item className="text-center mt-6">
                <Button htmlType="submit" className="w-full" type="primary">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>

          {/* Google Maps */}
          <div className="w-full h-[400px] sm:h-[500px] lg:h-[600px] lg:flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.971909362352!2d75.98869769598804!3d11.001591126577207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7b4a66b9e1243%3A0x57ad4731fa4b1279!2sKottakkal%2C%20Kerala!5e0!3m2!1sen!2sin!4v1744087532318!5m2!1sen!2sin"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


