import { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import './FacultyRegister.css';
import axios from 'axios';

const emailPattern = /^((21|22|23|24|25)(ucc|dcs|ucs|dce|uec|ume)[0-9]{3}|[a-zA-Z]+\.[a-zA-Z]+)@lnmiit\.ac\.in$/;

const FacultyRegister = () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onFinish = (values) => {
    setErrorMessage('');
    if (!emailPattern.test(values.email)) {
      setErrorMessage('Invalid email format. Please follow the specified format.');
      return;
    }
    setData(values);
    onRegister(values);
  };

  const onRegister = async (formData) => {
    const url = "http://localhost:4001/api/user/register";

    try {
      const response = await axios.post(url, formData);
      if (response.data.success) {
        alert("Data registered successfully");
      } else {
        console.error("Server error:", response.data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Faculty Register</h2>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form form={form} name="register" onFinish={onFinish} className="register-form">
        <Form.Item
          name="name"
          rules={[
            { required: true, message: 'Please input your name!' },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-button">
            Register
          </Button>
        </Form.Item>
        <div className="login-link">
          Already have an account? <Link to="/login/faculty">Login here</Link>
        </div>
      </Form>
    </div>
  );
};

export default FacultyRegister;
