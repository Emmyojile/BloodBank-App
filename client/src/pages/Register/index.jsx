import React, { useState } from "react";
import { Button, Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import OrgHospital from "./OrgHospital";

const Register = () => {
  const [type, setType] = useState("donor");

  const onFinish = (values) => {
    console.log(values);
  }

  return (
    <div className="flex h-screen justify-center items-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid grid-cols-2 p-5 gap-5 w-1/2"
        onFinish={onFinish}
      >
        <h1 className="col-span-2 uppercase text-2xl">
          <span className="text-primary">
            {type.toUpperCase()} - REGISTARTION
          </span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          className="col-span-2"
        >
          <Radio value="donor">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        {type === "donor" && (
          <>
            <Form.Item label="Name" name='name'>
              <Input />
            </Form.Item>
            <Form.Item label="Email" name='email'>
              <Input />
            </Form.Item>
            <Form.Item label="Phone" name='phone'>
              <Input />
            </Form.Item>
            <Form.Item label="Password" name='password'>
              <Input type="password"/>
            </Form.Item>
          </>
        )}

        {type !== 'donor' && 
            <OrgHospital type={type}/>
        }

        <Button type="primary" className="col-span-2"
        htmlType="submit"
        >
          Register
        </Button>

        <Link
          to={"/login"}
          className="col-span-2 text-center text-gray-700 underline"
        >
          Already Have an account? Login
        </Link>
      </Form>
    </div>
  );
};

export default Register;
