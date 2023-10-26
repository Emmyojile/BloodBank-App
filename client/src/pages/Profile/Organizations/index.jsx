import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllOrganizationsOfDonor,
  GetAllOrganizationsOfHospital,
} from "../../../api/users";
import { SetLoading } from "../../../redux/loaderSlice";
import { Modal, Table, message } from "antd";
import { getDateFormat } from "../../../utils/helpers";
import InventoryTable from "../../../components/InventoryTable";

const Organizations = ({ userType }) => {
  const { currentUser } = useSelector((state) => state.users);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [data, setData] = useState([]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "organizationName",
      render: (text) => text.toUpperCase(),
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      render: (text) => getDateFormat(text),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => (
        <span
          className="underline text-md cursor-pointer"
          onClick={() => {
            setSelectedOrganization(record);
            setShowHistoryModal(true);
          }}
        >
          HISTORY
        </span>
      ),
    },
  ];

  const getData = async () => {
    try {
      dispatch(SetLoading(true));
      const response =
        (await userType) === "donor"
          ? await GetAllOrganizationsOfDonor()
          : await GetAllOrganizationsOfHospital();
      dispatch(SetLoading(false));
      if (response.success) {
        setData(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(SetLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Table columns={columns} dataSource={data} />

      {showHistoryModal && (
        <Modal
          title={`${
            userType === "donor" ? "Donation History" : "Consumption History"
          } In ${selectedOrganization.organizationName}`}
          centered
          open={showHistoryModal}
          onClose={() => setShowHistoryModal(false)}
          width={1000}
          onCancel={() => setShowHistoryModal(false)}
        >
          <InventoryTable
            filters={{
              organization: selectedOrganization._id,
              [userType]: currentUser._id,
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default Organizations;
