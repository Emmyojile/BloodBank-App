import Modal from "antd/es/modal/Modal";
import React from "react";

const InventoryForm = ({ open, setOpen, reloadData }) => {
  return (
    <div>
      <Modal
        title="Add Inventory"
        open={open}
        onCancel={() => setOpen(false)}
        centered
      ></Modal>
    </div>
  );
};

export default InventoryForm;
