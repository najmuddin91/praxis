import React from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select } from 'antd';

function Register() {
  return (
    <div>
    <header className="App-header">
    <form>
      <Form.Item name="fullName" label="Full Name">
        <Input placeholder="Type your name"/>
      </Form.Item>

      <Form.Item name="email" label="Email">
        <Input placeholder="Type your email"/>
      </Form.Item>

      <Form.Item name="password" label="Password">
        <Input.Password placeholder="Type your password"/>
      </Form.Item>

      <Form.Item name="confirmPassword" label="ConfirmPassword">
        <Input.Password placeholder="Confirm your password"/>
      </Form.Item>

      <Form.Item name="gender" label="Gender">
        <Select placeholder="Select your gender">
          <Select.Option velue="male">Male</Select.Option>
          <Select.Option velue="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="dob" label="Date of Brith">
        <DatePicker picker="date" placeholder="Chose date of birth"/>
      </Form.Item>

    </form>
  </header>
    </div>
  );
}

export default Register