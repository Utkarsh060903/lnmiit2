import  { useState, useContext } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { UserContext } from '../../context/UserContext.jsx';
import axios from 'axios';
import { setTokenWithExpiry } from '../../Utils/tokenUtils.js'

const emailPattern = /^(21|22|23|24|25)(ucc|dcs|ucs|dce|uec|ume)[0-9]{3}@lnmiit\.ac\.in$/;

const Login = () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setErrorMessage('');
    if (!emailPattern.test(values.email)) {
      setErrorMessage('Invalid email format. Please follow the specified format.');
      return;
    }
    onLogin(values);
  };

  const onLogin = async (formData) => {
    const url = "http://localhost:4001/api/user/login";

    try {
      const response = await axios.post(url, formData);
      if (response.data.success) {
        const { token , name } = response.data;
        setTokenWithExpiry(token, name, 3); // Set token for 3 days
        setUser({ name }); 
        navigate('/form');
      } else {
        console.error("Server error:", response.data);
        setErrorMessage(response.data.message || 'Login failed.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Student Login</h2>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form form={form} name="login" onFinish={onFinish} className="login-form">
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
          <Button type="primary" htmlType="submit" className="login-button">
            Login
          </Button>
        </Form.Item>
        <div className="register-link">
          New user? <Link to="/register/student">Register here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
