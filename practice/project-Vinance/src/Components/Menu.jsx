import React from 'react'
import { Form, Button, Checkbox, DatePicker, Input, Select } from 'antd';

function Menu() {
  return (
    <header className="App-header">
    <form>
      <Form.Item name="fullName" label="Nama Lengkap">
        <input placeholder="Nama Lengkap Maszzeeh"/>
      </Form.Item>

      <Form.Item name="email" label="Email">
        <input placeholder="Masukan Email Maszzeeh"/>
      </Form.Item>

      <Form.Item name="password" label="Password">
        <input placeholder="Masukan pasword Maszzeeh"/>
      </Form.Item>

      <Form.Item name="konfirmasiPassword" label="Konfirmasi Password">
        <input placeholder="Konfirmasi Pasword Maszzeeh"/>
      </Form.Item>
    </form>
  </header>
  )
}

export default Menu