import { Form, Input, Radio, message } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useState } from "react";
import { getAntdInputValidation } from "../../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { SetLoading } from "../../../redux/loaderSlice";
import { AddInventory } from "../../../api/inventory";

const InventoryForm = ({ open, setOpen, reloadData }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [form] = Form.useForm();
  const [inventoryType, setInventoryType] = useState("in");
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(SetLoading(true));
      const response = await AddInventory({
        ...values,
        inventoryType,
        organization: currentUser._id,
      });
      dispatch(SetLoading(false));
      if (response.success) {
        reloadData();
        message.success("Inventory added successfully");
        setOpen(false);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  };
  return (
    <div>
      <Modal
        title="ADD INVENTORY"
        open={open}
        onCancel={() => setOpen(false)}
        centered
        onOk={() => {
          form.submit();
        }}
      >
        <Form
          layout="vertical"
          className="flex flex-col gap-5"
          form={form}
          onFinish={onFinish}
        >
          <Form.Item label="Inventory Type">
            <Radio.Group
              value={inventoryType}
              onChange={(e) => setInventoryType(e.target.value)}
            >
              <Radio value="in">In</Radio>
              <Radio value="out">Out</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Blood Group"
            name="bloodGroup"
            rules={getAntdInputValidation()}
          >
            <select name="" id="">
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="Ab-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </Form.Item>

          <Form.Item
            label={inventoryType === "out" ? "Hospital Email" : "Donor Email"}
            name="email"
            rules={getAntdInputValidation()}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Quantity (ML)"
            name="quantity"
            rules={getAntdInputValidation()}
          >
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default InventoryForm;
